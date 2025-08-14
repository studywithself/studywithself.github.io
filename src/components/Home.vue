<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex flex-col items-center justify-center">
      <h1 class="text-5xl font-bold">학습 블로그</h1>
      <h2 class="pt-5 text-xl">직접 공부하고 정리한 내용입니다</h2>
      <h3 class="pt-5 text-lg">상단 메뉴를 눌러 확인해보세요</h3>
      <h4 class="pt-5 text-lg">하단 메뉴는 외부 링크로 이어집니다</h4>

      <div class="flex gap-8 pt-8">
        <!-- GitHub -->
        <a href="https://github.com/Im-uisoon" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-48 hover:scale-105 transition">
            <img src="../templates/img/github.png" class="w-24 h-24 object-contain rounded-lg mb-2" alt="GitHub" />
            <span class="text-center font-bold text-lg hover:underline mt-2">프로젝트 코드</span>
          </div>
        </a>

        <!-- Tistory -->
        <a href="https://doran1122.tistory.com/" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-48 hover:scale-105 transition">
            <img src="../templates/img/tistory.png" class="w-30 h-24 object-contain rounded-lg mb-2" alt="Tistory" />
            <span class="text-center font-bold text-lg hover:underline mt-2">학습 블로그</span>
          </div>
        </a>

        <!-- Velog -->
        <a href="https://velog.io/@doran_1122/posts" target="_blank" rel="noopener noreferrer">
          <div class="flex flex-col items-center bg-white rounded-xl shadow-md p-4 w-48 hover:scale-105 transition">
            <img src="../templates/img/velog.png" class="w-24 h-24 object-contain rounded-lg mb-2" alt="Velog" />
            <span class="text-center font-bold text-lg hover:underline mt-2">프로젝트 기록</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/templates/Header.vue'
</script>

<style scoped></style>
