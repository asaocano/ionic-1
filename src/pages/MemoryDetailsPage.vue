<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview
      v-else
      :title="loadedMemory.title"
      :img="loadedMemory.img"
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  components: {
    BaseLayout,
    MemoryOverview,
  },
};
</script>

<style>
</style>