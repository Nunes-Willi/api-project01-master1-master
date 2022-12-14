<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E57BA22516F76D93CF581C74E35AF58A3E317AF798D1EACE47CC210F3A5F5A65/scale?width=2880&aspectRatio=1.78&format=jpeg"
          width="1600"
          height="600"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://tracklist.com.br/wp-content/uploads/2021/11/1636043728095981-0.jpg"
          width="1600"
          height="600"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://t.ctcdn.com.br/NN8ouhv1G2bQdv5zfOPTR4JjXyY=/1400x788/smart/i327740.jpeg"
          width="1600"
          height="600"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
@import "@/assets/base.css";

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
