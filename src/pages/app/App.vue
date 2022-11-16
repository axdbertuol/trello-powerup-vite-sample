<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRouter, RouterLink, RouterView } from "vue-router";
const router = useRouter();
const state = reactive({ count: 0 });
const trello = computed(() => window?.TrelloPowerUp?.iframe());
function increment() {
  state.count++;
}
</script>

<template>
  <h1>Nested Views</h1>
  <p>
    <router-link to="/card-buttons/note">/users/eduardo</router-link>
    <br />
  </p>
  <router-view> </router-view>
</template>
