<template>
  <div>Home</div>
  <div class="content">
    <ul class="list">
      <li v-for="link in list" :key="link.name">
        <router-link :to="link.path">{{ link.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "@/router";
import { pick } from "ramda";
export default {
  computed: {
    list() {
      return routes
        .filter(({ label }) => label !== undefined)
        .map((e) => pick(["label", "path", "name"])(e));
    },
  },
  mounted() {
    console.log(this.list);
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 15px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
}
</style>
