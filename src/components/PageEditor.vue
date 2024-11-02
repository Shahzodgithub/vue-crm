<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  BaseKit,
  Bold,
  Color,
  Fullscreen,
  Heading,
  Highlight,
  History,
  Image,
  Italic,
  Link,
  Strike,
  Table,
  Underline,
  Video,
  VuetifyTiptap,
//   VuetifyViewer,
} from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'
import { locale } from 'vuetify-pro-tiptap'

locale.setLang('en')

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const content = ref(props.modelValue)
const emit = defineEmits(['update:modelValue'])
watch(content, newValue => {
  emit('update:modelValue', newValue)
})

const extensions = [
  BaseKit.configure({
    placeholder: {
      placeholder: 'Enter some text...',
    },
  }),
  Bold,
  Italic,
  Underline,
  Strike,
  Color,
  Highlight,
  Heading,
  Link,
  Image,
  Video,
  Table,
  Fullscreen,
  History,
]
</script>

<template>
  <VContainer>
    <VuetifyTiptap
      v-model="content"
      label="Content"
      rounded
      :min-height="200"
      :max-height="465"
      :max-width="900"
      :extensions="extensions"
    />
    <!-- <VuetifyViewer :value="content" /> -->
  </VContainer>
</template>

<style scoped>
.v-locale--is-ltr {
  padding: 0px !important;
}
.v-application__wrap {
  min-height: 900px !important;
  max-height: 900px !important;
}
</style>
