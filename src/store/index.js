import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    books: null,
    mainContent: null,
  },
  mutations: {
    getBooks(state, payload) {
      state.books = payload;
      console.log(state.books);
    },
    GetMainContent(state, payload) {
      state.mainContent = payload;
      console.log(state.mainContent);
    },
  },
  actions: {
    async getBooks({ commit }, book) {
      try {
        const url = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyC1f35TPtwXBu897bEcHjeR727JoH99LbI&maxResults=40`
        );
        const obj = url.data.items;
        commit('getBooks', obj);
      } catch (error) {
        console.error(error);
      }
    },
    async GetMainContent({ commit }) {
      try {
        const url = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=programming&key=AIzaSyC1f35TPtwXBu897bEcHjeR727JoH99LbI&maxResults=40`
        );
        const obj = url.data.items;
        commit('GetMainContent', obj);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {
  }
});