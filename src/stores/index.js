import { defineStore } from 'pinia'
import axios from 'axios'

export const usePageStore = defineStore('pageStore', {
  state: () => ({
    pages: [],
  }),
  actions: {
    async fetchPages() {
      const response = await axios.get('http://localhost:3009/pages');
      this.pages = response.data;
    },
    async createPage(page) {
      const response = await axios.post('http://localhost:3009/pages', page);
      this.pages.push(response.data);
    },
    async updatePage(page) {
      const response = await axios.put(`http://localhost:3009/pages/${page.id}`, page);
      const index = this.pages.findIndex(p => p.id === response.data.id);
      this.pages[index] = response.data;
    },
    async deletePage(id) {
      await axios.delete(`http://localhost:3009/pages/${id}`);
      this.pages = this.pages.filter(page => page.id !== id);
    },
  },
});

