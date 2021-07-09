<template>
  <h1>Vuex</h1>

  <h2>All List</h2>
  <ol>
    <li v-for="todo in todos" :key="todo.id">
      <p>{{ todo.label }}</p>
    </li>
  </ol>

  <h2>Todo List</h2>
  <ol>
    <li v-for="todo in doneTodos" :key="todo.id">
      <p>{{ todo.label }}</p>
    </li>
  </ol>

  {{ getRandomNum() }} {{ hash }}

  <div>
    <button @click.self="decrements">-{{ gap.minus }}</button>
    <span>{{ count }}</span>
    <button @click.self.prevent="increments({ amount: gap.plus })">
      +{{ gap.plus }}
    </button>
  </div>

  <div>
    <button @click.self="decreaseAsync">-{{ gap.minus }} async</button>
    <span>{{ count }}</span>
    <button @click.self="increaseAsync({ amount: gap.plus })">
      +{{ gap.plus }} async
    </button>
  </div>

  <div>
    <span>User name: </span>
    <input type="text" v-model.lazy.trim="name" />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  createNamespacedHelpers,
} from "vuex";
import store from "@/vuex/store";
import types from "@/vuex/type";

const { mapActions } = createNamespacedHelpers("app");

export default {
  data() {
    return {
      gap: { plus: 3, minus: 2 },
    };
  },
  computed: {
    ...mapState({
      todos: (state) => state.app.todos,
    }),
    ...mapState("app", {
      count: (state) => state.count,
    }),
    // ...mapGetters({
    //   doneTodos: "app/doneTodos",
    //   getRandomNum: "app/getRandomNum",
    // }),
    ...mapGetters("app", ["doneTodos", "getRandomNum"]),
    ...mapGetters(["hash"]),
    name: {
      get() {
        return store.state.auth.user?.name ?? "";
      },
      set(name) {
        store.commit(types.auth.setUser, { name });
      },
    },
  },
  methods: {
    // increments: function() {
    //   store.commit("app/increments", { amount: this.gap.plus });
    // },
    ...mapMutations("app", ["increments"]),
    decrements: function() {
      store.commit(types.app.decrements, { amount: this.gap.minus });
      store.commit(types.root.sayHello);
    },
    // increaseAsync: function() {
    //   store.dispatch("app/increaseAsync", { amount: this.gap.plus });
    // },
    ...mapActions(["increaseAsync"]),
    decreaseAsync: async function() {
      await store.dispatch("app/decreaseAsync", {
        amount: this.gap.plus,
      });
      console.log("Decrease finished.");
    },
  },
};
</script>
