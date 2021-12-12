<template>
  <div class="root">
    <div class="container">
      <div class="loading_1">
        <div class="ring" v-for="(ring, index) in 3" :key="index" />
        <p>Loading ...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  --clr: #111;
}

.root {
  display: flex;
  //   justify-content: center;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: var(--clr);
}
.loading_1 {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ring {
    position: relative;
    width: 150px;
    height: 150px;
    margin: -30px;
    border-radius: 50%;

    border: 4px solid transparent;
    border-top: 4px solid #24ecff;

    animation: clockwise_rotate 3s linear infinite;

    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      right: 13.5px;
      top: 13.5px;
      border-radius: 50%;
      background-color: #24ecff;
      box-shadow: 0 0 0 5px#24edffd2, 0 0 0 10px#24edffaf, 0 0 0 20px#24edff5f,
        0 0 0 35px#24edff25, 0 0 0 50px#24edff09;
    }

    &:nth-child(2) {
      border-top: 4px solid #ff24ed;
      animation: counter_clockwise_rotate 3s linear infinite;
      animation-delay: -1s;

      &::before {
        height: 15px;
        left: 13.5px;
        bottom: 13.5px;
        background-color: #ff24ed;
        box-shadow: 0 0 0 5px#ff24edd2, 0 0 0 10px#ff24edaf, 0 0 0 20px#ff24ed5f,
          0 0 0 35px#ff24ed25, 0 0 0 50px#ff24ed09;
      }
    }

    &:nth-child(3) {
      position: absolute;
      top: -66.66px;
      animation: counter_clockwise_rotate 3s linear infinite;
      animation-delay: -2s;
      border-top: none;
      border-bottom: 4px solid #ffff24;

      &::before {
        display: none;
      }

      &::after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        right: 13.5px;
        bottom: 13.5px;
        border-radius: 50%;
        background-color: #ffff24;
        box-shadow: 0 0 0 5px#ffff24d2, 0 0 0 10px#ffff24af, 0 0 0 20px#ffff245f,
          0 0 0 35px#ffff2425, 0 0 0 50px#ffff2409;
      }
    }
  }

  p {
    position: absolute;
    color: #fff;
    font-size: 1.5em;
    bottom: -120px;
    letter-spacing: 0.15em;
  }
  @keyframes clockwise_rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes counter_clockwise_rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}

.container {
  width: 350px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
