<template>
  <HeaderBar_mobile />

  <!--C O N T E N T-->

  <div
    class="flex-center flex-col w-full gap-5 pt-20 md:pt-32 bg-background dark:bg-zinc-900"
  >
    <!-- top part -->
    <div
      class="flex-center flex-col w-full h-40 md:h-56"
      v-if="showAdminContent"
    >
      <div
        class="flex-center relative w-[80dvw] md:w-auto gap-1.5 px-16 md:px-32 rounded-4xl h-full text-slate-600 dark:text-slate-400 border-dashed border-2 border-slate-600 dark:border-slate-400"
        :class="{
          'border-indigo-800 bg-zinc-600 dark:border-indigo-400 dark:bg-indigo-50 border-solid':
            isDragging,
        }"
        id="dropzone"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
      >
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          @change="handleFileSelect"
          accept="image/*"
          multiple
        />

        <Icon
          icon="ri:image-add-fill"
          width="72"
          height="72"
          class="absolute bottom-1/2 cursor-pointer"
          @click="openFileDialog"
        />
        <span class="mt-16 md:mt-10 cursor-alias text-nowrap text-xs md:text-xl"
          >Drop your images here or</span
        >
        <span
          class="underline mt-16 md:mt-10 cursor-pointer text-nowrap text-xs md:text-xl"
          @click="openFileDialog"
          >browse files</span
        >
      </div>
    </div>

    <!-- Skeleton loader -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 !px-5 items-top place-content-center justify-items-center w-auto !pb-20"
      v-if="isLoading"
    >
      <useSkeleton height="320px" />
      <useSkeleton height="280px" />
      <useSkeleton height="300px" />
      <useSkeleton height="280px" />
      <useSkeleton height="320px" />
      <useSkeleton height="300px" />
    </div>
    <!-- gallery container -->

    <div class="flex gap-4 !px-5 items-top justify-center w-full !pb-20" v-else>
      <div
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        class="flex flex-col gap-4"
      >
        <div
          v-for="(image, imgIndex) in col"
          :key="imgIndex"
          class="relative group"
        >
          <button
            @click.stop="toggleFavorite(image)"
            class="absolute top-2 right-2 z-20 bg-white/80 backdrop-blur-md p-1 rounded-full shadow-md group-hover:scale-110 transition-transform"
          >
            <Icon
              :icon="isFavorited(image) ? 'ri:heart-fill' : 'ri:heart-line'"
              class="text-red-500"
              width="24"
              height="24"
            />
          </button>

          <img
            :src="image.url"
            alt="Gallery Image"
            class="gallery-image"
            @click="openModal(colIndex, imgIndex)"
          />
        </div>
      </div>
    </div>
  </div>

  <FooterBar />
  <div
    v-if="isModalOpen"
    class="fixed w-dvw h-dvh inset-0 flex items-center justify-center z-999 !px-12 overflow-hidden"
    :style="{
      backgroundImage: `url(${currentImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    @click="closeModal"
  >
    <!-- Blur + dark overlay -->
    <div class="absolute inset-0 backdrop-blur-md bg-black/50"></div>

    <div
      class="flex justify-center items-center relative bg-rgba[0,0,0,0.5] z-10"
      @click.stop
    >
      <img
        :src="currentImage"
        alt="Current Image"
        class="rounded-lg transition-transform duration-300 cursor-zoom-in"
        :class="{
          'max-w-[80dvw] max-h-dvh !py-4': !isZoomed,
          'scale-150 cursor-zoom-out': isZoomed,
        }"
        :style="isZoomed ? { transformOrigin: zoomOrigin } : {}"
        @click.stop="toggleZoom"
      />
    </div>
    <!-- Close Button -->
    <button
      @click="closeModal"
      class="absolute top-10 right-10 text-white text-4xl font-bold hover:text-gray-400 hover:bg-gray-900 cursor-pointer w-12 h-12 bg-gray-700 rounded-full"
    >
      ×
    </button>

    <!-- Navigation -->
    <button
      @click.stop="prevImage"
      class="absolute left-1 top-1/2 transform -translate-y-1/2 text-white text-4xl w-32 h-32 hover:text-gray-400 cursor-pointer"
    >
      ‹
    </button>
    <button
      @click.stop="nextImage"
      class="absolute right-1 top-1/2 transform -translate-y-1/2 text-white text-4xl w-32 h-32 hover:text-gray-400 cursor-pointer"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import { Icon } from "@iconify/vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import UseSkeleton from "@/components/layout/useSkeleton.vue";

const auth = useAuthStore();
const router = useRouter();
const toast = useToast();
const isLoading = ref(true);

const showAdminContent = computed(() => {
  if (!auth.user) return false;
  return auth.is("artist");
});

onMounted(async () => {
  await auth.fetchCurrentUser();
  getImages();
});

// GET IMAGES 🖼️🖼️

async function getImages() {
  isLoading.value = true;

  const { data, error } = await supabase.storage
    .from("artwork")
    .list("gallery", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (!data || error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Failed to fetch images",
      life: 3000,
    });
    console.error("Error fetching images:", error);
    return;
  }

  // ✅ Filter out placeholder and non-image files
  const validImages = data.filter(
    (item) =>
      item.name !== ".emptyFolderPlaceholder" &&
      item.metadata?.mimetype?.startsWith("image/")
  );

  // ✅ Build image list with size estimation (optional)
  const imageList = await Promise.all(
    validImages.map(async (item) => {
      const url = `https://dmkxiaphkvmmnzdgviro.supabase.co/storage/v1/object/public/artwork/gallery/${item.name}`;
      const { width, height } = await getImageSize(url);
      return { url, width, height };
    })
  );

  images.value = imageList;
  balanceColumns();
  isLoading.value = false;
}

// DROPZONE
const fileInput = ref(null);
const isDragging = ref(false);

const handleDrop = (e) => {
  e.preventDefault();
  isDragging.value = false;
  const files = Array.from(e.dataTransfer.files);
  handleFiles(files);
};

const handleDragOver = (e) => {
  e.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = (e) => {
  e.preventDefault();
  isDragging.value = false;
};

const handleFileSelect = (e) => {
  const files = Array.from(e.target.files);
  handleFiles(files);
};

const openFileDialog = () => {
  fileInput.value.click();
};

async function uploadImage(e) {
  let file = e.target.files[0];

  const { data, error } = await supabase.storage
    .from("artwork")
    .upload(`gallery/${uuidv4()}${file}`);

  if (data) {
    getImages();
  } else {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `Failed to upload ${file.name}`,
      life: 3000,
    });
    console.error("Error uploading file:", error);
  }
}

// IMAGES LOAD 🖼️🖼️
const images = ref([]);

const columns = reactive([[], [], []]);

async function handleFiles(files) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      toast.add({
        severity: "error",
        summary: "Invalid file",
        detail: `${file.name} is not an image file`,
        life: 3000,
      });
      continue;
    }
    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from("artwork")
      .upload(`gallery/${uuidv4()}_${file.name}`, file);

    if (error) {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to upload ${file.name}`,
        life: 3000,
      });
      console.error("Error uploading file:", error);
      continue;
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("artwork")
      .getPublicUrl(`gallery/${data.path.split("/").pop()}`);
    const url = publicUrlData.publicUrl;

    // Optionally get image size
    const { width, height } = await getImageSize(url);
    const image = { url, width, height };
    images.value.unshift(image);
    balanceColumns();

    toast.add({
      severity: "success",
      summary: "Image uploaded",
      detail: `${file.name} was uploaded to the gallery`,
      life: 3000,
    });
  }
}

function getImageSize(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.src = url;
  });
}

function balanceColumns() {
  // Reset columns
  columns.splice(0); // remove old content
  columns.push([], [], []); // ensure 3 columns

  const heights = [0, 0, 0];

  for (const image of images.value) {
    const ratio = image.height / image.width || 1;
    const displayWidth = 300;
    const displayHeight = displayWidth * ratio;

    const minIndex = heights.indexOf(Math.min(...heights));
    columns[minIndex].push(image);
    heights[minIndex] += displayHeight;
  }
}

// FAVORITES 💗💗
const favorites = ref(new Set());

const toggleFavorite = (image) => {
  const url = typeof image === "string" ? image : image.url;
  if (favorites.value.has(url)) {
    favorites.value.delete(url);
  } else {
    favorites.value.add(url);
  }
};

const isFavorited = (image) => {
  const url = typeof image === "string" ? image : image.url;
  return favorites.value.has(url);
};

// ZOOM 🔎🔎
const isZoomed = ref(false);
const zoomOrigin = ref("center center");

const toggleZoom = (event) => {
  if (!isZoomed.value) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((event.clientY - rect.top) / rect.height) * 100;
    zoomOrigin.value = `${offsetX}% ${offsetY}%`;
  }
  isZoomed.value = !isZoomed.value;
};

// MODAL 🔍🔍
const isModalOpen = ref(false);
const currentCol = ref(0);
const currentImg = ref(0);

const openModal = (colIndex, imgIndex) => {
  currentCol.value = colIndex;
  currentImg.value = imgIndex;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const currentImage = computed(
  () => columns[currentCol.value][currentImg.value]?.url
);

const prevImage = () => {
  if (currentImg.value > 0) {
    currentImg.value--;
  } else if (currentCol.value > 0) {
    currentCol.value--;
    currentImg.value = columns[currentCol.value].length - 1;
  }
};

const nextImage = () => {
  if (currentImg.value < columns[currentCol.value].length - 1) {
    currentImg.value++;
  } else if (currentCol.value < columns.length - 1) {
    currentCol.value++;
    currentImg.value = 0;
  }
};
</script>

<style lang="scss" scoped></style>
