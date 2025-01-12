import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
		userInfo: {},
    usedata: localStorage.getItem("data"),
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.token = payload.jwt;
			state.userInfo = payload.user;
      state.data = payload.data;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.userInfo = "";
      state.data = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:1337/api/auth/local",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.jwt;  
						const data = resp.data;
            localStorage.setItem("token", token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", data);
            resolve(resp);
            console.log("Response received:", JSON.stringify(resp.data, null, 2));
            console.log(localStorage.getItem("data"));
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:1337/api/auth/local/register",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            console.log("Response received:", JSON.stringify(response.data, null, 2));
            const token = resp.data.jwt;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    USERINFO(state) {
      return state.userInfo
    }
  },
  plugins: [createPersistedState()],
});
