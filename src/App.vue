<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |

    <template v-for="i in 5" :key="i">
      <router-link :to="`/users/${i}`" v-slot="{ navigate, isActive }">
        <button @click="navigate" role="link" :class="{ active: isActive }">
          User {{ i }}
        </button>
      </router-link>
    </template>

    | <router-link to="/vuex">Vuex</router-link>
  </div> -->
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  cursor: pointer;
  border: none;
  padding: 4px 8px;
  background-color: white;
}

.active {
  color: #42b983;
}
</style>
