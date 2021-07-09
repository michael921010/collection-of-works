<template>
  <h1 v-show="userId">User {{ userId }} - {{ userInfo?.name }}</h1>
  <div v-show="!loading">
    <div>username: @{{ userInfo?.username }}</div>
    <div>email: {{ userInfo?.email }}</div>
    <div>phone: {{ userInfo?.phone }}</div>
    <hr />

    Show <a @click="go2Post">/users/{{ userId }}/posts</a>

    <hr />
    <!-- 等等要給 Post.vue 的位置 -->
    <router-view />
  </div>

  <!-- <pre v-show="!loading">{{ userInfo }}</pre> -->
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      userInfo: {},
      loading: false,
    };
  },
  computed: {
    userId() {
      return this.$route.params?.userId ?? null;
    },
  },
  watch: {
    userId: async function(val) {
      if (val !== null) {
        this.userInfo = await this.fetchUserInfo(val);
      }
    },
  },
  methods: {
    async fetchUserInfo(id) {
      try {
        this.loading = true;
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + id
        ).then((response) => response.json());

        return res;
      } catch (err) {
        return {};
      } finally {
        this.loading = false;
      }
    },
    go2Post() {
      router.push(`/users/${this.userId}/posts`);
    },
  },
  async created() {
    this.userInfo = await this.fetchUserInfo(this.userId);
  },
};
</script>

<style>
a {
  color: #42b983;
  cursor: pointer;
}
</style>
