<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper">
    <img
      src="@/assets/img/hello.png"
      alt=""
      class="content-image"
    >
    <p class="paper">
      It’s your papers that we cater.
    </p>
    <div class="book-button">
      <button class="book-now">
        Book Now!
      </button>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    gap: 5rem;
}
.content-image {
    width: 277px;
    height: 115px;
}
.paper {
    font-size: 3rem;
    font-weight: 900;
    line-height: 25px;
    color: #542B7C;
}

.book-button {
    width: 115px;
    height: 37px;
    border-radius: 14px;
    background-color: #F48D2D;
    box-shadow: 0px 4px 4px 0px #00000040;
    display: flex;
    justify-content: center;
}
.book-now {
    outline: none;
    border: none;
    background: none;
    font-weight: 700;
    color: #542B7C;
    font-size: 16px;
}

</style>
