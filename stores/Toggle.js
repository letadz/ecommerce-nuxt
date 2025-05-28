export default {
  state: () => ({
    isShowSidebar: false,
  }),
  mutations: {
    SET_SIDEBAR_STATE(state, payload) {
      state.isShowSidebar = payload;
    },
  },
};
