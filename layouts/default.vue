<script setup lang="ts">

</script>

<template>
  <div class="bg-[#292929]" h-screen flex gap-2 overflow-y-hidden font-sans text-white>
    <Sidebar />
    <div h-full w-full flex-1 overflow-y-hidden px-4 py-4>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
