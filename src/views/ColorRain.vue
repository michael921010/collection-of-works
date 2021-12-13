<template>
  <div class="root">
    <i :style="rain.style" v-for="rain in rains" :key="rain.num" />
  </div>
</template>

<script>
import { range } from "ramda";

export default {
  data() {
    return {
      amount: 200,
    };
  },
  computed: {
    rains() {
      return range(0, this.amount).map((num) => {
        const size = Math.random() * 4;
        const posX = Math.floor(Math.random() * window.innerWidth);
        const delay = Math.random() * -20;
        const duration = Math.random() * 4 + 1;
        return {
          num,
          size,
          posX,
          style: {
            width: 0.2 + size + "px",
            left: posX + "px",
            animationDelay: delay + "s",
            animationDuration: duration + "s",
          },
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$rain_height: 200px;

.root {
  background-color: #000;
  overflow: hidden;
  height: 100vh;

  i {
    position: absolute;
    height: $rain_height;
    background: linear-gradient(transparent, #fff);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    animation: animate 5s linear infinite;
    opacity: 0.8;

    &:nth-child(3n + 1) {
      background: linear-gradient(transparent, #0ff);
    }
    &:nth-child(3n + 2) {
      background: linear-gradient(transparent, #0f0);
    }
    &:nth-child(3n + 3) {
      background: linear-gradient(transparent, #f00);
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(-1 * $rain_height);
    }
    100% {
      transform: translateY(100vh);
      //   transform: translateY($rain_height + 100vh);
    }
  }
}
</style>
