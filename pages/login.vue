<script setup lang="ts">
definePageMeta({
  title: 'EVWAY. | Login',
  layout: 'login',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: 'dashboard',
  },
})

const { signIn, status } = useAuth()
</script>

<template>
  <div class="border-[#E6FF01]" grid grid-cols-12 h-full border-r-8 font-sans text-white>
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

    <div col-span-8 flex flex-col items-center justify-center gap-4>
      <div
        flex flex-col items-center justify-center gap-8 rounded-md px-20 py-6
        :style="{
          background: 'linear-gradient(119deg, rgba(144, 144, 144, 0.64) 0%, rgba(35, 36, 43, 0.64) 100%)',
          backdropFilter: 'blur(10px)',
          border: '3px solid rgba(230, 255, 1, 0.50)',
        }"
      >
        <div text-2xl font-semibold>
          Login
        </div>

        <button flex transform items-center gap-2 rounded-md bg-white px-4 py-2 font-500 text-black duration-300 class="translate" @click="signIn('google')">
          <div v-if="status === 'unauthenticated'" flex items-center gap-2>
            Continue with
            <div i-bi-google />
          </div>
          <div v-else loader />
        </button>
      </div>

      <div flex items-center gap-2 rounded-full bg-white px-8 py-2 text-black>
        <span text-lg font-bold class="text-[#494C4D]">Powered By</span>
        <img h-8 src="~/assets/redis-stack.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
