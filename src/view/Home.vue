<template>
  <div class="h-screen min-h-full flex flex-col">
    <Header class="h-16" />

    <!-- section 1 -->
    <section class="h-full bg-linear-to-r from-blue-100 to-blue-200 dark:bg-none dark:bg-zinc-800 flex items-center justify-center gap-100">
      <div class="flex flex-col">
        <!-- 인사말 -->
        <h1 class="slide-up-item-h1 text-5xl mb-2 dark:text-zinc-300">안녕하세요</h1>

        <h1 class="slide-up-item-h1 flex text-5xl mb-5 dark:text-zinc-300">
          <p class="mr-2 text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 text-transparent bg-clip-text">임의순</p>
          입니다.
        </h1>

        <h2 class="slide-up-item-h2 text-2xl text-zinc-500 mb-5">Full-stack Developer</h2>

        <h3 class="slide-up-item-h3 text-xl text-zinc-600 mb-7 dark:text-zinc-300">
          새로운 기술과 다양한 프로젝트를 통해 <br />
          경험을 쌓으며 성장하는 개발자가 되겠습니다! <br />
        </h3>

        <!-- 버튼 모음 -->
        <div>
          <!-- 연락처 -->
          <div>
            <!-- 이메일 -->
            <h3 class="slide-up-item-h3 text-xl text-zinc-600 mb-5 dark:text-zinc-300 flex gap-3">
              <div>
                <img src="/icon/mail_light.svg" class="p-1 border rounded border-zinc-500 w-8 h-8 dark:hidden" />
                <img src="/icon/mail_dark.svg" class="p-1 border rounded border-zinc-300 w-8 h-8 hidden dark:inline-block" />
              </div>
              <a href="mailto:dla5420@naver.com" class="items-center justify-center">dla5420@naver.com</a>
            </h3>
            <!-- 우편 -->
            <h3 class="slide-up-item-h3 text-xl text-zinc-600 mb-7 dark:text-zinc-300 flex gap-3">
              <div>
                <img src="/icon/gps_light.svg" class="p-1 border rounded border-zinc-500 w-8 h-8 dark:hidden" />
                <img src="/icon/gps_dark.svg" class="p-1 border rounded border-zinc-300 w-8 h-8 hidden dark:inline-block" />
              </div>
              <span class="items-center justify-center">충청남도 공주시 정안면 율속길 47-26</span>
            </h3>
          </div>
          <div class="slide-up-item flex gap-5 mt-5">
            <!-- GitHub -->
            <a href="https://github.com/Im-uisoon" target="_blank" rel="noopener noreferrer">
              <button class="border border-zinc-500 hover:bg-blue-100 dark:hover:bg-blue-500 text-zinc-700 dark:text-white py-2 px-4 rounded shadow-lg hover:scale-105 transition flex items-center gap-2">
                <img src="/icon/git_dark.svg" class="w-5 h-5 dark:hidden" />
                <img src="/icon/git_white.svg" class="w-5 h-5 hidden dark:inline-block" />
                Github
              </button>
            </a>

            <!-- Velog -->
            <a href="https://velog.io/@doran_1122/posts" target="_blank" rel="noopener noreferrer">
              <button class="border border-zinc-500 hover:bg-blue-100 dark:hover:bg-blue-500 text-zinc-700 dark:text-white py-2 px-4 rounded shadow-lg hover:scale-105 transition flex items-center gap-2">
                <img src="/icon/velog_black.svg" class="w-5 h-5 dark:hidden" />
                <img src="/icon/velog_white.svg" class="w-5 h-5 hidden dark:inline-block" />
                Velog
              </button>
            </a>

            <!-- Tistory -->
            <a href="https://doran1122.tistory.com/" target="_blank" rel="noopener noreferrer">
              <button class="border border-zinc-500 hover:bg-blue-100 dark:hover:bg-blue-500 text-zinc-700 dark:text-white py-2 px-4 rounded shadow-lg hover:scale-105 transition flex items-center gap-2">
                <img src="/icon/T_black.svg" class="w-5 h-5 dark:hidden" />
                <img src="/icon/T_white.svg" class="w-5 h-5 hidden dark:inline-block" />
                Tistory
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- section 2 -->
      <div>
        <h1 class="slide-up-item-h1 text-xl text-zinc-700 mb-2 dark:text-zinc-300">경력사항</h1>
        <h2 class="slide-up-item-h2 text-xl text-zinc-700 mb-7 dark:text-zinc-300">
          <p>국립한국교통대학교 컴퓨터공학과 학사</p>
        </h2>

        <!-- <h1 class="slide-up-item-h1 text-xl text-zinc-700 mb-2 dark:text-zinc-300">수상내역</h1>
        <h2 class="slide-up-item-h2 text-xl text-zinc-700 mb-7 dark:text-zinc-300">
          <p></p>
        </h2> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import Header from '@/Header.vue'
</script>

<style scoped>
/* h1,h2,h3 글자 애니메이션 */
@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-item {
  /* 애니메이션 시작 전 */
  opacity: 0;
  /* 애니메이션 적용 */
  animation-name: slideUpFadeIn;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  /* 애니메이션 끝난 후 */
  animation-fill-mode: forwards;
}

/* 애니메이션 대상 */
.slide-up-item-h1 {
  /* 애니메이션 시작 전 */
  opacity: 0;
  /* 애니메이션 적용 */
  animation-name: slideUpFadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  /* 애니메이션 끝난 후 */
  animation-fill-mode: forwards;
}

.slide-up-item-h2 {
  /* 애니메이션 시작 전 */
  opacity: 0;
  /* 애니메이션 적용 */
  animation-name: slideUpFadeIn;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  /* 애니메이션 끝난 후 */
  animation-fill-mode: forwards;
}

.slide-up-item-h3 {
  /* 애니메이션 시작 전 */
  opacity: 0;
  /* 애니메이션 적용 */
  animation-name: slideUpFadeIn;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  /* 애니메이션 끝난 후 */
  animation-fill-mode: forwards;
}
</style>
