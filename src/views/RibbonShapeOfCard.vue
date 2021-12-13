<template>
  <div class="root">
    <div class="card">
      <span />
      <div class="content">
        <h1>Profile</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$gap: 8px;
$ribbon_width: 100px;
$ribbon_height: 20px;

* {
  font-family: "Poppins", sans-serif;
}

.root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;

  .card {
    z-index: 1;
    position: relative;
    width: 300px;
    height: 400px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 25px 20px rgba(0, 0, 0, 0.2);

    span {
      position: absolute;
      top: -$gap;
      left: -$gap;
      width: $ribbon_width;
      height: $ribbon_width;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      &::before {
        content: "Ribbon";
        position: absolute;
        width: 150%;
        height: $ribbon_height;
        background-color: #62baea;
        transform: rotate(-45deg) translateY(-1 * $ribbon_height / 2);
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-weight: 600;
        color: #fff;
        letter-spacing: 0.1em;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      }

      &::after {
        content: "";
        position: absolute;
        width: $gap;
        height: $gap;
        bottom: 0;
        left: 0;
        background-color: #4a98bf;
        z-index: -1;
        box-shadow: ($ribbon_width - $gap) -1 * ($ribbon_width - $gap) #4a98bf;
      }
    }

    .content {
      margin-top: 20px;
      letter-spacing: 0.1em;
      text-align: center;
    }
  }
}
</style>
