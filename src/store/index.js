import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTabs: [],
  },
  mutations: {
    addTab(state, payload) {
      state.allTabs = [...this.state.allTabs, payload];
      let findSameId = this.state.allTabs;
      findSameId = findSameId
        .map((e) => e["id"])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((obj) => findSameId[obj])
        .map((e) => findSameId[e]);
      this.state.allTabs = findSameId;
    },
  },
  actions: {},
  modules: {},
});
