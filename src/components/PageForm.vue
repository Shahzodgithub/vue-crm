<template>
  <v-card class="my-3">
    <v-card-title>
      <span>{{ page.id ? 'Edit Page' : 'New Page' }}</span>
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="form.title" label="Title" required />
        <v-text-field v-model="form.slug" label="URL Slug" />
        <v-text-field
          v-model="form.metaKeywords"
          label="Meta Keywords"
          placeholder="seo, optimization"
        />
        <Editor v-model="form.content" style="height: auto !important" />
        <v-list-item-action class="ga-3 mt-2">
          <v-btn type="submit" color="primary" class="m-2">Save</v-btn>
          <v-btn @click="cancel" color="secondary" class="m-2"
            >Cancel</v-btn
          ></v-list-item-action
        >
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, toRefs, defineProps, defineEmits } from 'vue'
import Editor from './PageEditor.vue'

const props = defineProps({
  page: {
    type: Object,
    default: () => ({
      title: '',
      slug: '',
      metaKeywords: '',
      content: '',
    }),
  },
})

const emit = defineEmits(['cancel', 'submit'])
const form = ref({ ...toRefs(props.page) })

function submitForm() {
  emit('submit', form.value)
}

function cancel() {
  emit('cancel')
}
</script>
