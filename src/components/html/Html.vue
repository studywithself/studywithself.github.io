<template>
  <div class="flex h-full">
    <!-- Left Sidebar (TOC) -->
    <div class="w-64 bg-zinc-50 p-4 border-r border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700">
      <h2 class="font-bold text-lg mb-4 text-zinc-800 dark:text-zinc-200">HTML 목차</h2>
      <ul class="space-y-2">
        <li>
          <router-link to="/learning/html/2" class="block p-2 rounded-md text-zinc-600 hover:bg-blue-100 dark:text-zinc-400 dark:hover:bg-zinc-700" active-class="bg-blue-100 dark:bg-zinc-700 text-blue-700 dark:text-zinc-200 font-semibold">HTML 2</router-link>
        </li>

        <li>
          <router-link to="/learning/html/3" class="block p-2 rounded-md text-zinc-600 hover:bg-blue-100 dark:text-zinc-400 dark:hover:bg-zinc-700" active-class="bg-blue-100 dark:bg-zinc-700 text-blue-700 dark:text-zinc-200 font-semibold">HTML 3</router-link>
        </li>
      </ul>
    </div>

    <!-- Content Area -->
    <div class="flex-1 p-6 bg-white dark:bg-zinc-900 overflow-y-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup></script>
<style scoped></style>
