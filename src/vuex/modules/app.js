export const types = {
  increments: "app/increments",
  decrements: "app/decrements",
  increaseAsync: "app/increaseAsync",
  decreaseAsync: "app/decreaseAsync",
  sayAsync: "app/sayAsync",
};

const state = {
  todos: [
    { id: 1, label: "今晚打老鼠", done: true },
    { id: 2, label: "林北要疫苗", done: false },
  ],
  count: 100,
  name: "",
};

const getters = {
  doneTodos: (state) => state.todos.filter(({ done }) => done),
  unDoneTodos: (state) => state.todos.filter(({ done }) => !done),
  getRandomNum: (state, getters, rootState) => () => {
    return rootState.constant + Math.random() * 100; // [0,100]
  },
};

const mutations = {
  increments: (state, payload) => {
    state.count += payload?.amount ?? 0;
  },
  decrements: (state, payload) => {
    state.count -= payload?.amount ?? 0;
  },
};

export const actions = {
  increaseAsync: ({ commit, dispatch }, payload) => {
    setTimeout(() => {
      dispatch("sayAsync");
      commit("increments", payload);
    }, 1000);
  },
  decreaseAsync: ({ commit, dispatch }, payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch("sayAsync");
        commit("decrements", payload);
        resolve();
      }, 1000);
    });
  },
  sayAsync: () => {
    console.log("Async");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
