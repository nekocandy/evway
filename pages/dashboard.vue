<script setup lang="ts">

</script>

<template>
  <div grid grid-cols-12 h-full gap-4 overflow-y-hidden>
    <div col-span-7 flex flex-col gap-6>
      <div flex gap-12>
        <img h-fit border-1 border-l-0 border-gray-400 rounded-xl src="https://cdn.discordapp.com/attachments/1154420365083299911/1155473574950359050/Frame_92.png">
        <img h-fit border-1 border-l-0 border-gray-400 rounded-xl src="https://cdn.discordapp.com/attachments/1154420365083299911/1155473574715465800/Frame_91.png">
        <img h-fit border-1 border-l-0 border-gray-400 rounded-xl src="https://cdn.discordapp.com/attachments/1154420365083299911/1155473575206195260/Frame_93.png">
      </div>
      <iframe flex-1 src="https://www.openstreetmap.org/export/embed.html?bbox=72.47337341308595%2C18.827016441626743%2C73.13941955566408%2C19.11921945341411&amp;layer=mapnik" style="border: 1px solid black" />

      <button rounded-md bg-white py-2 font-bold font-sans uppercase text-black>
        Book EV
      </button>
    </div>
    <div col-span-5 flex flex-col gap-4 overflow-y-auto text-white>
      <div flex items-center justify-between>
        <h1 font-bold uppercase>
          Vehicles Search
        </h1>

        <div flex items-center justify-center gap-2 overflow-y-hidden rounded-md bg-white px-4 py-1 text-sm text-black>
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
