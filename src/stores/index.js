import { defineStore } from 'pinia';
import { db } from '../firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const usePageStore = defineStore('pageStore', {
  state: () => ({
    pages: [],
  }),
  actions: {
    async fetchPages() {
      const querySnapshot = await getDocs(collection(db, 'pages'));
      this.pages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async createPage(page) {
      const docRef = await addDoc(collection(db, 'pages'), page);
      this.pages.push({ id: docRef.id, ...page });
    },
    async updatePage(page) {
      const pageRef = doc(db, 'pages', page.id);
      await updateDoc(pageRef, page);
      const index = this.pages.findIndex(p => p.id === page.id);
      if (index !== -1) {
        this.pages[index] = { id: page.id, ...page };
      }
    },
    async deletePage(id) {
      const pageRef = doc(db, 'pages', id);
      await deleteDoc(pageRef);
      this.pages = this.pages.filter(page => page.id !== id);
    },
  },
});
