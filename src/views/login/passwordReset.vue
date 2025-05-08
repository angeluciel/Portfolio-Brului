<template>
  <div id="main" class="flex h-dvh overflow-hidden bg-violet-50">
    <section class="hidden lg:block md:w-[35dvw] lg:w-[50dvw] h-dvh">
      <div class="h-full relative">
        <router-link
          to="/"
          class="absolute top-10 left-10 !text-xl md:!text-4xl z-50"
          ><span class="!font-abril !text-violet-50 underline"
            >Brului</span
          ></router-link
        >

        <img
          src="/images/first-second.jpg"
          alt="placeholder"
          class="w-full h-full object-cover object-left-top"
        />
      </div>
    </section>
    <section class="w-full">
      <main class="flex relative !items-center justify-start h-full">
        <!-- B R E A D C R U M B S -->
        <div
          class="hidden lg:flex absolute top-10 left-36 xl:top-24 flex-row gap-2"
        >
          <router-link to="/" class=""
            ><span
              class="font-normal text-gray-400 hover:text-gray-500 !text-lg"
              >home</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <router-link to="/login" class=""
            ><span
              class="text-gray-400 font-normal hover:text-gray-500 !text-lg"
              >login</span
            ></router-link
          >
          <div class="cursor-alias">/</div>
          <span class="text-charcoal font-semibold">reset</span>
        </div>
        <!--breadcrumbs end-->
        <div class="w-full sm:!py-8 !px-16 md:!ml-20 max-w-xl">
          <h1 class="!font-abril text-6xl !mb-5 text-charcoal">
            Reset your Password
          </h1>
          <p class="!mb-10 text-violet-900">
            Please enter your email so that we can send a link for the password
            reset.
          </p>
          <div>
            <form>
              <div class="flex flex-col gap-4">
                <!--mail-->
                <baseInput
                  title="Email"
                  placeholder=""
                  type="text"
                  variant="login"
                />
              </div>
              <!--button-->
              <baseButton text="Sign in" color="login" variant="filled" />
            </form>
            <!--google auth-->
            <div class="">
              <form>
                <baseButton
                  text="Sign in with Google"
                  color="login"
                  variant="outline"
                />
              </form>
            </div>
            <div class="mt-5">
              <router-link to="/login/" class="underline"
                >Already have an account?</router-link
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import baseButton from "@/components/base/baseButton.vue";
import baseInput from "@/components/base/baseInput.vue";
</script>

<style scoped></style>
