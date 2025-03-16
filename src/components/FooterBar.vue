<template>
  <div class="footer">
    <div class="footer_text">
      <span class="Follow_me">Follow me on Social Media!</span>
      <div class="footer_links">
        <div class="footer_ig">
          <a href="https://www.instagram.com/bru__lui/" class="footer_image">
            <img src="./icons/instaIcon.svg" alt="insta" />
          </a>
          <span href="https://www.instagram.com/bru__lui/">@bru_lui</span>
        </div>
        <div class="footer_x">
          <a href="https://twitter.com/Bru__Lui" class="footer_image">
            <img src="./icons/twtIcon.svg" alt="x" />
          </a>
          <span href="https://twitter.com/Bru__Lui">@Bru_Lui</span>
        </div>
      </div>
      <div class="design-by">
        <span>Design and Code by @medeirosjpmi</span>
        <img src="./icons/instaIcon.svg" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 0 1rem;
  background: #f3e9d4;

  .footer_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.7rem;

    .Follow_me {
      font-family: "Abril Fatface", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 48px;
    }

    .footer_links {
      display: flex;
      gap: 128px;
      color: #655d4c;

      .footer_ig,
      .footer_x {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        span {
          font-size: 44px;
        }
      }

      .footer_image {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: 3px solid #655d4c;
        cursor: pointer;
        transition: 0.3s ease-in;

        &:hover {
          background: rgba(114, 109, 109, 0.5);
        }

        img {
          max-width: 32px;
        }
      }
    }

    .design-by {
      display: flex;
      color: #aba088;
      gap: 1rem;
      align-items: center;
      padding: 0 0 2rem 0;

      img {
        height: 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
