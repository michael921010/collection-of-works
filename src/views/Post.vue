<template>
  <h1>Post from User {{ userId }}</h1>
  <ol>
    <li v-for="post in posts" :key="post?.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    userId: String,
  },
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  watch: {
    userId: async function(val) {
      if (val !== null) {
        this.posts = await this.fetchUserPosts(val);
      }
    },
  },
  methods: {
    async fetchUserPosts(id) {
      try {
        this.loading = true;
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + id
        ).then((response) => response.json());
        return res;
      } catch (err) {
        return {};
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    this.posts = await this.fetchUserPosts(this.userId);
  },
};
</script>
