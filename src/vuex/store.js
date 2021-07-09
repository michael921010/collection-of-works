import { createStore, createLogger } from "vuex";
import VuexPersistence from "vuex-persist";
import modules from "./modules";

const logger = createLogger({
  collapsed: false, // auto-expand logged mutations
  logActions: true, // Log Actions
  logMutations: true, // Log mutations
  logger: console,
});

const vuexLocalStorage = new VuexPersistence({
  key: "vuex-persist",
  storage: window.localStorage,
  modules: ["auth"], // storage in persistent
});

export const types = {
  sayHello: "sayHello",
};

const state = {
  constant: 2,
};

const getters = {
  hash: (state) => "[hash]-" + state.constant,
};

const mutations = {
  sayHello: () => {
    console.log("Hello");
  },
};

const actions = {};

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [logger, vuexLocalStorage.plugin],
  strict: process.env.NODE_ENV !== "production",
});

export default store;
