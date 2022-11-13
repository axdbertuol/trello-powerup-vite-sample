<script setup>
import { computed, reactive } from 'vue'

const state = reactive({ count: 0 })
const trello = computed(() => window?.TrelloPowerUp?.iframe())
function increment() {
  state.count++
}
</script>

<template>
  <div>This is Strawberries App</div>
  <a target="_self" href="/apple">apple</a>
  <span> {{ trello }}</span>
  <span> | </span>
  <a target="_self" href="/banana">banana</a>
  <span> | </span>
  <a target="_self" href="/">home</a>
</template>
