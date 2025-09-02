<template>
  <div class="h-screen min-h-full flex flex-col">
    <Header class="h-16" />
    <section class="h-full bg-zinc-100 dark:bg-zinc-800">
      <!-- section 1 : 상단 카테고리 -->
      <div class="relative flex items-center border-b-1 border-zinc-300 dark:border-zinc-300 bg-zinc-200 dark:bg-zinc-900">
        <!-- 좌측 이동 버튼 -->
        <button @click="scrollLeft" v-show="!is_start" class="absolute left-0 z-10 p-2 transition-opacity duration-300 ease-in-out bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800">
          <img src="/icon/left_dark.svg" class="w-6 h-6" />
        </button>

        <!-- 내비게이션 바 -->
        <div ref="scrollContainer" class="overflow-x-auto flex gap-10 p-2 px-10 text-black dark:text-zinc-300 scrollbar-hide">
          <router-link to="/learning/html">HTML</router-link>
          <router-link to="/learning/css">CSS</router-link>
          <h1>Vue</h1>
          <h1>React</h1>
          <h1>JavaScript</h1>
          <h1>TypeScript</h1>
          <h1>Spring</h1>
          <h1>MySQL</h1>
          <h1>SQLD</h1>
          <h1>JAVA</h1>
          <h1>JSP</h1>
          <h1>GIT</h1>
          <h1>Linux</h1>
          <h1>Bash</h1>
        </div>

        <!-- 우측 이동 버튼 -->
        <button @click="scrollRight" v-show="!is_end" class="absolute right-0 z-10 p-2 transition-opacity duration-300 ease-in-out bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800">
          <img src="/icon/right_dark.svg" class="w-6 h-6" />
        </button>
      </div>

      <!-- section 2 : 하단 메뉴 변경 -->
      <router-view />
    </section>
  </div>
</template>

<script setup>
import Header from '@/Header.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollContainer = ref(null)
const is_start = ref(true)
const is_end = ref(false)

const handleScroll = () => {
  if (scrollContainer.value) {
    is_start.value = scrollContainer.value.scrollLeft <= 0
    is_end.value = scrollContainer.value.scrollWidth - scrollContainer.value.scrollLeft - scrollContainer.value.clientWidth <= 0
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
    handleScroll()
    setTimeout(handleScroll, 100)
  }
})

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* (목록) 브라우저 스크롤바 가림 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* Edge, Firefox 대비 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
