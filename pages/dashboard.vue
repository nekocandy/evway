<script setup lang="ts">

</script>

<template>
  <div grid grid-cols-12 gap-4>
    <div col-span-7 />
    <div col-span-5 flex flex-col gap-4 text-white>
      <div flex items-center justify-between>
        <h1 font-bold uppercase>
          Vehicles Search
        </h1>

        <div flex items-center justify-center gap-2 rounded-md bg-white px-4 py-1 text-sm text-black>
          <span>Powered By</span>
          <img w-24 src="~/assets/redis-stack.png" alt="redis-stack">
        </div>
      </div>

      <DashboardSearchEVModels />
    </div>
  </div>
</template>

<style scoped>

</style>
