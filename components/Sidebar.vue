<script setup lang="ts">
interface PathOption {
  path: string
  name: string
}

const PATHS: PathOption[] = [
  {
    name: 'Full Rental',
    path: '/rental/full',
  },
  {
    name: 'Partial Rental',
    path: '/rental/partial',
  },
  {
    name: 'Renter Details',
    path: '/renter/details',
  },
  {
    name: 'Journey Maps',
    path: '/journey/maps',
  },
  {
    name: 'Journey Details',
    path: '/journey/details',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Safety Information',
    path: '/safety',
  },
]
</script>

<template>
  <div class="bg-[#1E1E1E]" flex flex-col gap-4 px-10 py-8 font-sans text-white>
    <NuxtLink flex gap-2 text-4xl font-bold to="/dashboard">
      <span class="text-[#E6FF01]" tracking-wide>
        EVWAY
      </span>
      <span class="text-[#FF24BD]">
        .
      </span>
    </NuxtLink>

    <div flex flex-col gap-4 pt-8>
      <NuxtLink
        v-for="path in PATHS"
        :key="path.path"
        :to="path.path"

        flex items-center gap-1 text-lg
      >
        <div>
          <div
            v-if="$route.path.startsWith(path.path)"
            i-bi-chevron-right h-4 w-4 class="text-[#E6FF01]"
          />
          <div
            v-else
            i-bi-plus h-4 w-4 class="text-[#FF24BD]"
          />
        </div>
        <div
          :class="{
            'text-[#FF24BD]': $route.path.startsWith(path.path),
          }"
        >
          {{ path.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
