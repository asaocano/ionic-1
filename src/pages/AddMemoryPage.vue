<template>
  <base-layout pageTitle="Add a memory" pageDefaultBackLink="/memories">
    <memory-form @save-memory="saveMemory"></memory-form>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import MemoryForm from "../components/memories/CreateMemoryForm.vue";
export default {
  components: { BaseLayout, MemoryForm },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch("addMemory", memoryData);
      this.$router.replace("/memories");
    },
  },
};
</script>

<style>
</style>