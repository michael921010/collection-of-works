<template>
  <div class="root">
    <div class="dropdown" :class="{ open }">
      <input
        type="text"
        placeholder="Dropdown Menu"
        readonly
        :value="value"
        @click.stop="open = !open"
      />
      <div class="options" :class="{ open }">
        <div
          v-for="option in options"
          :key="option.name"
          @click.stop="handler(option.label)"
        >
          <ion-icon :name="option.name" :style="{ color: option.color }" />
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      value: null,
      options: [
        {
          name: "logo-html5",
          label: "Html",
          color: "#ea8262",
        },
        {
          name: "logo-css3",
          label: "CSS",
          color: "#62b6ea",
        },
        {
          name: "logo-vue",
          label: "VueJS",
          color: "#36e895",
        },
        {
          name: "logo-react",
          label: "ReactJS",
          color: "#58ecfc",
        },
        {
          name: "logo-docker",
          label: "Docker",
          color: "#4ba6f5",
        },
      ],
    };
  },
  methods: {
    handler(label) {
      this.value = label;
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  font-family: "Poppins", sans-serif;
}

.root {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;

  .dropdown {
    position: relative;
    margin-top: 100px;
    width: 300px;
    height: 50px;

    &:hover {
      &::before {
        transform: scale(1.2) rotate(-45deg);
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 15px;
      right: 20px;
      z-index: 10000;
      width: 8px;
      height: 8px;
      border: 2px solid #333;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(-45deg);
      transition: all 0.5s;
      pointer-events: none;
    }

    &.open {
      &::before {
        top: 22px;
        transform: rotate(-225deg);
      }
      &:hover {
        &::before {
          transform: scale(1.2) rotate(-225deg);
        }
      }
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: #fff;
      border: none;
      outline: none;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      padding: 12px 20px;
      border-radius: 10px;
    }

    .options {
      position: absolute;
      top: 60px;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.4s ease-in;
      max-height: 500px;

      &:not(.open) {
        max-height: 0px;
        transition: all 0.4s ease-out;
      }

      div {
        padding: 12px 20px;
        cursor: pointer;
        text-align: left;

        &:hover {
          background-color: #d0cfcf80;
        }

        ion-icon {
          position: relative;
          top: 4px;
          font-size: 1.2em;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
