<template>
  <div class="root">
    <h2><span>Hello</span> <span>World</span></h2>
  </div>
</template>

<style lang="scss" scoped>
.root {
  font-family: arial;
}
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #07252d;

  h2 {
    position: relative;
    font-size: 6em;
    color: #0e3742;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    -webkit-box-reflect: below -42px linear-gradient(transparent, #0004);

    span {
      animation: blinking 5s linear infinite;

      &:nth-child(even) {
        animation-delay: 0.4s;
      }
    }
  }

  @keyframes blinking {
    0%,
    18%,
    20%,
    50.1%,
    60%,
    65.1%,
    80%,
    90.1%,
    92% {
      color: #0e3742;
      text-shadow: none;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: #ffffff;
      text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4,
        0 0 80px #03bcf4, 0 0 160px #03bcf4, 0 0 400px #03bcf4;
    }
  }
}
</style>
