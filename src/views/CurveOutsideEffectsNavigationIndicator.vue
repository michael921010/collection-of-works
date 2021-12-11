<template>
  <div class="root">
    <div class="navigation_1">
      <ul>
        <li
          class="list"
          :class="{ active: item.name === highlight }"
          v-for="item in list"
          :key="item.name"
          @click.stop="highlight = item.name"
        >
          <a href="#">
            <span class="icon">
              <ion-icon :name="item.iconName"></ion-icon>
            </span>
            <span class="label">{{ item.label }}</span>
          </a>
        </li>
        <div class="indicator" :style="transform" />
      </ul>
    </div>
    <div class="navigation_2">
      <ul>
        <li
          class="list"
          :class="{ active: item.name === highlight }"
          v-for="item in list"
          :key="item.name"
          @click.stop="highlight = item.name"
        >
          <a href="#">
            <span class="icon">
              <ion-icon :name="item.iconName"></ion-icon>
            </span>
            <span class="label">{{ item.label }}</span>
          </a>
        </li>
        <div class="indicator" :style="transform" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlight: "home",
      list: [
        {
          name: "home",
          label: "Home",
          iconName: "home-outline",
        },
        {
          name: "message",
          label: "Message",
          iconName: "chatbubble-ellipses-outline",
        },
        {
          name: "photos",
          label: "Photos",
          iconName: "image-outline",
        },
        {
          name: "profile",
          label: "Profile",
          iconName: "person-circle-outline",
        },
        {
          name: "settings",
          label: "Settings",
          iconName: "settings-outline",
        },
      ],
    };
  },
  computed: {
    activedIndex() {
      return this.list.findIndex(({ name }) => name === this.highlight) ?? 0;
    },
    transform() {
      return `transform: translateX(${this.activedIndex * 70}px)`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.root {
  --clr: #222327;
}

.root {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: var(--clr);
}

.navigation_1 {
  width: 400px;
  height: 70px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ul {
    display: flex;
    width: 350px;

    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;

      a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-weight: 500;

        .icon {
          position: relative;
          display: block;
          line-height: 75px;
          font-size: 1.5em;
          text-align: center;
          transition: 0.5s;
          color: var(--clr);
        }

        .label {
          position: absolute;
          color: var(--clr);
          font-weight: 400;
          font-size: 0.75em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(20px);
        }
      }

      &.active {
        a {
          .icon {
            transform: translateY(-35px);
          }
          .label {
            opacity: 1;
            transform: translateY(10px);
          }
        }
      }
    }
  }
  .indicator {
    position: absolute;
    width: 70px;
    height: 100%;
    background-color: #29fd53;
    top: -50%;
    border-radius: 50%;
    border: 7px solid var(--clr);
    transition: 0.5s;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -23px;
      width: 20px;
      height: 20px;
      border-top-right-radius: 20px;
      box-shadow: 0px -10px 0 0 var(--clr);
      background: transparent;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -23px;
      width: 20px;
      height: 20px;
      border-top-left-radius: 20px;
      box-shadow: 0px -10px 0 0 var(--clr);
      background: transparent;
    }
  }
}

.navigation_2 {
  width: 400px;
  height: 70px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ul {
    display: flex;
    width: 350px;

    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 60px;
      z-index: 2;

      a {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-weight: 500;

        .icon {
          position: relative;
          display: block;
          line-height: 65px;
          font-size: 1.5em;
          text-align: center;
          transition: 0.5s;
          color: var(--clr);
        }

        .label {
          position: absolute;
          color: #ffffff;
          font-weight: 400;
          font-size: 0.75em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(15px);
          background-color: #2196f3;
          padding: 2px 9px;
          border-radius: 12px;
        }
      }

      &.active {
        a {
          .icon {
            transform: translateY(-33px);
            color: #2196f3;
          }
          .label {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      }
    }
  }
  .indicator {
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: #ffffff;
    top: -40%;
    border-radius: 50%;
    z-index: 1;
    transition: 0.5s;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: -25px;
      width: 30px;
      height: 30px;
      box-shadow: 15px 20px #ffffff;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0px;
      right: -25px;
      width: 30px;
      height: 30px;
      box-shadow: -15px 20px #ffffff;
      border-radius: 50%;
    }
  }
}
</style>
