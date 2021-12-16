<template>
  <div class="root">
    <div>
      <span v-for="(char, i) in 'css'.split('')" :key="i">
        <i>{{ char }}</i>
      </span>
      <span style="opacity: 0;" />
      <br />
      <span v-for="(char, i) in 'only'.split('')" :key="i">
        <i>{{ char }}</i>
      </span>
      <br />
      <span><i /></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  font-family: Consolas;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #232323;

  span {
    position: relative;
    display: inline-flex;
    width: 80px;
    height: 80px;
    padding: 8px 15px;
    margin: 8px 4px;
    border-radius: 10px;
    background: linear-gradient(180deg, #282828, #202020);
    box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
      inset 0 -8px -8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75),
      10px 20px 25px rgba(0, 0, 0, 0.4);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 4px;
      bottom: 14px;
      right: 12px;
      background: linear-gradient(90deg, #232323, #4a4a4a);
      border-radius: 10px;
      box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25),
        10px 5px 10px rgba(0, 0, 0, 0.15);
      border-left: 1px solid #0004;
      border-bottom: 1px solid #0004;
      border-top: 1px solid #0009;
    }

    i {
      position: relative;
      color: #fff;
      font-style: normal;
      font-size: 1.3em;
      text-transform: uppercase;
    }

    &:last-child {
      width: 100%;
    }

    &:hover {
      transform: translateX(2px) translateY(5px);
    }
  }
}
</style>
