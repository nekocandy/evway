<script setup lang="ts">
import ScootyImage from '@/assets/scooty.png'
</script>

<template>
  <div

    h-screen bg-cover bg-center bg-no-repeat
    :style="{
      backgroundImage: `url(${ScootyImage})`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>

</style>
