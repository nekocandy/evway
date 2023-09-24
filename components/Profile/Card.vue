<script setup lang="ts">
const { data } = useAuth()

const user = data.value!.user!
</script>

<template>
  <div class="bg-[#1E1E1E]" grid grid-cols-12 gap-4 rounded-md px-4 py-8>
    <div col-span-8 flex flex-col gap-2>
      {{ user.name }}
      <div h-2 border-b-2 class="border-[#6C6C6C]" />
      <div>
        Age: 22
      </div>
      <div>
        License Number: XXXX XX XX364
      </div>
      <div>
        EV Vehicle: Ather 450X
      </div>

      <div>
        Document Clearance: Done
      </div>
    </div>
    <div col-span-4>
      <img w-full :src="user.image || 'https://vpizza.pycz.dev/oink.svg'" rounded-md>
    </div>
  </div>
</template>

<style scoped>

</style>
