<template>
  <div class="sticky top-0 z-10 w-full flex h-15 bg-zinc-100 dark:bg-zinc-800 backdrop-blur-sm border-b-1 border-zinc-300 dark:border-zinc-300 justify-between items-center px-10 text-black dark:text-zinc-300">
    <!-- 좌측 홈 로고 -->
    <router-link to="/" class="text-lg dark:text-zinc-300">Study With Self</router-link>
    <!-- 중앙 내비게이션 -->
    <ul class="flex space-x-10 text-lg">
      <li><router-link to="/">홈</router-link></li>
      <li><router-link to="/learning">학습</router-link></li>
      <li><router-link to="/stack">스택</router-link></li>
      <li><router-link to="/projects">프로젝트</router-link></li>
    </ul>
    <!-- 우측 다크모드 -->
    <button @click="toggleDarkMode" class="p-2 rounded-md">
      <img :src="isDarkMode ? '/icon/darkmode.svg' : '/icon/lightmode.svg'" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
li .router-link-active {
  /* text-blue-500 */
  color: #3b82f6;
}
</style>
