<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex flex-1 overflow-hidden">
      <SqldSide class="w-[20%] p-5 border-r border-blue-500 overflow-y-auto" />

      <div class="w-[80%] p-10 overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/templates/Header.vue'
import SqldSide from '@/components/sqld/sqldSide.vue'
</script>

<style scoped></style>
