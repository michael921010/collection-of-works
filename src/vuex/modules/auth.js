export const types = {
  setUser: "auth/setUser",
};

const state = {
  user: null,
};

const getters = {
  authorized: (state) => !!state.user,
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
const actions = {};

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
