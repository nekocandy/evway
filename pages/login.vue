<script setup lang="ts">
definePageMeta({
  title: 'EVWAY. | Login',
  layout: 'login',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: 'dashboard',
  },
})
</script>

<template>
  <div grid grid-cols-12 h-full border-r-8 class="border-[#E6FF01]">
    <div
      :style="{
        background: 'linear-gradient(90deg, rgba(12, 15, 27, 0.50) 0%, rgba(255, 255, 255, 0.00) 197.9%)',
        backdropFilter: 'blur(10px)',
      }"
      col-span-4 flex flex-col justify-between px-12 py-12 font-sans text-white
    >
      <div flex flex-col gap-2 text-4xl font-semibold>
        <h1>
          Your Journey,
        </h1>

        <h1>
          Your Way
        </h1>
      </div>

      <div flex gap-2 text-4xl font-bold>
        <span class="text-[#E6FF01]">
          EVWAY
        </span>
        <span class="text-[#FF24BD]">
          .
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
