<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'

defineProps<{
  msg: string
}>()

import { ref } from 'vue'

const value = ref('')
const items = ref([])

const search = (event) => {
  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item)
}
</script>

<template>
  <div class="card flex justify-center">
    <AutoComplete v-model="value" :suggestions="items" @complete="search" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
