<template>
  <v-card class="elevation-2 rounded-lg" min-width="900px">
    <v-card-title class="d-flex justify-space-between align-center">
      <h2 class="headline mb-0">Pages</h2>
      <v-btn @click="addPage" color="primary" class="ml-4"
        ><v-icon icon="mdi-plus" color="white" start></v-icon> New Page</v-btn
      >
    </v-card-title>
    <v-list lines="three">
      <v-list-item-group>
        <v-list-item v-for="page in pages" :key="page.id" class="my-2">
          <template v-slot:prepend>
            <div class="ga-2 d-flex align-center">
              <v-icon icon="mdi-web" class="text-h4"></v-icon>
              <a
                :href="`https://nuxt-ssr-two-bice.vercel.app/${page.slug}`"
                class="text-h5 text-decoration-none"
              >
                {{ page.title }}
              </a>
            </div>
          </template>
          <template v-slot:append>
            <v-icon
              icon="mdi-square-edit-outline"
              color="warning"
              start
              @click="editPage(page)"
            ></v-icon>
            <v-icon
              icon="mdi-trash-can-outline"
              end
              @click="deletePage(page.id)"
              color="red"
            ></v-icon>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['pages'])
const emit = defineEmits(['add', 'edit', 'delete'])

function addPage() {
  emit('add')
}

function editPage(page) {
  emit('edit', page)
}

function deletePage(id) {
  emit('delete', id)
}
</script>
