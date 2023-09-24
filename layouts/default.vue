<script setup lang="ts">

</script>

<template>
  <div h-screen flex gap-2>
    <Sidebar />
    <div h-full w-full flex-1>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
