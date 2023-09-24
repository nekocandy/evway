<script setup lang="ts">
interface EvModel {
  id: string
  name: string
  addedBy: string
  createdAt: string
}

const { $client } = useNuxtApp()
const evModelInput = ref('')
const dataLoading = ref(false)
const evData = ref<EvModel[]>([])

async function loadData(value?: string) {
  dataLoading.value = true
  const data = await $client.evModels.getEvModels.query(value && value.length ? value : undefined)
  // @ts-expect-error typings are messed up
  evData.value = data?.evModels
  dataLoading.value = false
  consola.info(data)
}

await loadData()

watch(evModelInput, async (value) => {
  await loadData(value)
})

async function addVehicle() {
  // eslint-disable-next-line no-alert
  const nameOfVehicle = prompt('Enter the name of the vehicle')
  if (nameOfVehicle) {
    const newVehicleData = await $client.evModels.createModel.mutate(nameOfVehicle)
    await loadData()
    // eslint-disable-next-line no-alert
    alert(`Vehicle added to Redis Database successfully with ID: ${newVehicleData?.evModel.id}`)
  }
}
</script>

<template>
  <div class="bg-[#1E1E1E]" flex flex-col gap-4 overflow-y-hidden rounded-md px-4 py-4>
    <button rounded-md bg-white py-1 text-black @click="addVehicle">
      Add Vehicle
    </button>
    <div flex items-center gap-2>
      <input v-model="evModelInput" flex-1 class="bg-[#2D2D2D] placeholder:(text-[#7E7E7E]) focus:outline-none" px-4 py-2 placeholder="Search EV Model Here">
      <div v-if="dataLoading" loader />
    </div>

    <div flex flex-col gap-2 pt-1 font-sans>
      <div v-for="data in evData" :key="data.id" class="bg-[#2D2D2D]" rounded-md px-3 py-2>
        {{ data.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
