<template>
  <div class="root">
    <div class="cube" v-for="n in 3" :key="n">
      <div>
        <div class="lid" />
        <span v-for="face in 4" :key="face" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$size1: 200px;
$size2: 100px;

$color1: #0f0;
$color2: rgb(255, 0, 247);
$color3: rgb(0, 187, 255);

.root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #050505;

  .cube {
    position: relative;
    width: $size1;
    height: $size1;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;

    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;

      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#151515, $color1);
      }

      @for $i from 2 through 5 {
        span:nth-child(#{$i}) {
          transform: rotateY(90deg * $i) translateZ($size1/2);
        }
      }
    }

    .lid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #222;
      transform: rotateX(90deg) translateZ($size1/2);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color1;
        transform: translateZ(-300px);
        filter: blur(20px);
        box-shadow: 0 0 120px rgba($color1, 0.2), 0 0 200px rgba($color1, 0.4),
          0 0 300px rgba($color1, 0.6), 0 0 400px rgba($color1, 0.8),
          0 0 500px rgba($color1, 1);
      }
    }

    &:nth-child(1) {
      position: absolute;
      bottom: 160px;
    }

    &:nth-child(2) {
      position: absolute;
      right: 100px;
      top: 80px;
      width: $size2;
      height: $size2;

      div {
        span {
          background: linear-gradient(#151515, $color2);
        }

        @for $i from 2 through 5 {
          span:nth-child(#{$i}) {
            transform: rotateY(90deg * $i) translateZ($size2/2);
          }
        }
      }

      .lid {
        transform: rotateX(90deg) translateZ($size2/2);

        &::before {
          background-color: $color2;
          transform: translateZ(-150px);
          box-shadow: 0 0 120px rgba($color2, 0.2), 0 0 200px rgba($color2, 0.4),
            0 0 300px rgba($color2, 0.6), 0 0 400px rgba($color2, 0.8),
            0 0 500px rgba($color2, 1);
        }
      }
    }

    &:nth-child(3) {
      position: absolute;
      left: 100px;
      top: 80px;
      width: $size2;
      height: $size2;

      div {
        span {
          background: linear-gradient(#151515, $color3);
        }

        @for $i from 2 through 5 {
          span:nth-child(#{$i}) {
            transform: rotateY(90deg * $i) translateZ($size2/2);
          }
        }
      }

      .lid {
        transform: rotateX(90deg) translateZ($size2/2);

        &::before {
          background-color: $color3;
          transform: translateZ(-150px);
          box-shadow: 0 0 120px rgba($color3, 0.2), 0 0 200px rgba($color3, 0.4),
            0 0 300px rgba($color3, 0.6), 0 0 400px rgba($color3, 0.8),
            0 0 500px rgba($color3, 1);
        }
      }
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
}
</style>
