<template>
  <div class="root">
    <section class="banner">
      <header>
        <div
          class="toggle"
          :class="{ active }"
          @click.stop="active = !active"
        />
        <a href="#" class="logo">
          <img src="~@/assets/SquidGameResponsiveWebsite/logo.png" alt="logo" />
        </a>
      </header>

      <div class="content">
        <img
          class="caption"
          src="~@/assets/SquidGameResponsiveWebsite/text.png"
          alt="caption"
        />
        <p>
          Hundreds of cash-strapped players accept a strange initation to
          compete in children's games. Inside, a tempting prize awaits - with
          deadly high stakes.
        </p>
        <a href="#" class="watch_button">
          <ion-icon name="play-circle-outline" />
          Watch Trailer
        </a>
      </div>

      <div class="clip">
        <div class="box">
          <img src="~@/assets/SquidGameResponsiveWebsite/img1.jpeg" alt="" />
          <ion-icon name="play-circle-outline" />
        </div>
        <div class="box">
          <img src="~@/assets/SquidGameResponsiveWebsite/img2.jpeg" alt="" />
          <ion-icon name="play-circle-outline" />
        </div>
      </div>

      <ul class="social">
        <li v-for="icon in social" :key="icon">
          <a href="#">
            <ion-icon :name="icon" />
          </a>
        </li>
      </ul>
    </section>

    <ul class="navigation" :class="{ active }">
      <li v-for="link in links" :key="link.key">
        <a href="#">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      links: [
        { key: "home", label: "Home" },
        { key: "about", label: "About" },
        { key: "cast", label: "Cast" },
        { key: "shop", label: "Shop" },
        { key: "contact", label: "Contact" },
      ],
      social: ["logo-facebook", "logo-twitter", "logo-instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

.root {
  --clr: #120e0f;
}

.root {
  font-family: "Poppins", sans-serif;

  .banner {
    min-height: 100vh;
    padding: 40px 50px;
    background-image: url("~@/assets/SquidGameResponsiveWebsite/bg.jpeg");
    background-size: cover;
    background-position: center;
    background-color: var(--clr);
    display: flex;
    align-items: center;

    header {
      position: absolute;
      top: 40px;
      display: flex;
      align-items: center;

      .toggle {
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 1px;
        background-color: #fff;
        margin-right: 20px;
        cursor: pointer;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
          content: "";
          position: absolute;
          width: 28px;
          height: 3px;
          background-color: var(--clr);
          transform: translateY(-6px);
          transition: 0.5s;
        }
        &::after {
          content: "";
          position: absolute;
          width: 28px;
          height: 3px;
          background-color: var(--clr);
          transform: translateY(6px);
          transition: 0.5s;
        }

        &.active {
          &::before {
            transform: rotate(45deg);
          }
          &::after {
            transform: rotate(-45deg);
          }
        }
      }

      .logo {
        img {
          max-width: 120px;
        }
      }
    }

    .content {
      position: relative;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: -100px;

      .caption {
        max-width: 600px;
        width: 100%;
      }

      p {
        color: #fff;
        font-size: 1.2em;
        line-height: 1.75em;
        font-weight: 300;
        text-align: left;
      }

      .watch_button {
        position: relative;
        background-color: #e83c80;
        color: #fff;
        display: inline-flex;
        align-items: center;
        padding: 10px 18px;
        margin-top: 20px;
        font-size: 1.1em;
        font-weight: 400;
        text-decoration: none;
        border-radius: 2px;
        cursor: pointer;

        &:hover {
          background-color: #d43071;
        }

        ion-icon {
          margin-right: 5px;
          font-size: 2em;
        }
      }
    }

    .clip {
      position: absolute;
      right: 50px;
      bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;

      .box {
        position: relative;
        width: 340px;
        height: 220px;
        border: 8px solid #fff;
        background-color: #e83c80;
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          img {
            opacity: 0.4;
          }
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.7s;
        }

        ion-icon {
          color: #fff;
          font-size: 4em;
        }
      }
    }

    .social {
      position: absolute;
      bottom: 40px;
      left: 50px;
      display: flex;
      align-items: center;
      gap: 40px;

      li {
        list-style: none;

        a {
          font-size: 2em;
          color: #fff;

          &:hover {
            color: #e83c80;
          }
        }
      }
    }
  }

  .navigation {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("~@/assets/SquidGameResponsiveWebsite/menuBg.jpeg");
    background-origin: right;
    background-size: cover;
    padding-right: 100px;
    opacity: 0;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    &.active {
      opacity: 1;
      z-index: 9;
    }

    li {
      list-style: none;
      margin: 4px 0;

      a {
        color: #fff;
        font-size: 2em;
        letter-spacing: 0.05em;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;

        &:hover {
          color: #e83c80;
        }
      }
    }
  }

  // responsive
  @media (max-width: 1050px) {
    .banner {
      padding: 40px;
      flex-direction: column;
      align-items: flex-start;

      .content {
        margin-top: 150px;
      }

      .clip {
        max-width: 100%;
        position: relative;
        right: initial;
        bottom: initial;
        margin: 40px 0;

        .box {
          max-width: 100%;
        }
      }

      .social {
        position: relative;
        bottom: initial;
        left: initial;
      }
    }

    .navigation {
      padding-right: 40px;
    }
  }
}
</style>
