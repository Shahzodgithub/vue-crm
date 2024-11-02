<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <router-view
        @add="openForm"
        @edit="openForm"
        @delete="deletePage"
        :pages="pagesList"
      />
      <v-dialog v-model="dialog" max-width="900px">
        <PageForm :page="editingPage" @submit="savePage" @cancel="cancelEdit" />
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePageStore } from '@/stores/index.js'
import PageForm from './components/PageForm.vue'

const pageStore = usePageStore()
const editingPage = ref(null)
const pagesList = ref([])
const dialog = ref(false)

const fetchPages = async () => {
  await pageStore.fetchPages()
  pagesList.value = pageStore.pages
}

const openForm = (page = {}) => {
  editingPage.value = page
  dialog.value = true
}

const savePage = async page => {
  if (page.id) {
    await pageStore.updatePage(page)
  } else {
    await pageStore.createPage(page)
  }
  editingPage.value = null
  dialog.value = false
  await fetchPages()
}

const deletePage = async id => {
  await pageStore.deletePage(id)
  await fetchPages()
}

const cancelEdit = () => {
  editingPage.value = null
  dialog.value = false
}

onMounted(fetchPages)
</script>
