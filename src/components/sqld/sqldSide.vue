<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">SQLD</h2>
    <ul class="flex flex-col gap-3">
      <router-link to="/sqld/overview">Overview</router-link>
      <p class="select-none text-blue-500">1과목</p>
      <router-link to="/sqld/database">Database</router-link>
      <router-link to="/sqld/datamodeling">데이터 모델링</router-link>
      <router-link to="/sqld/schema">스키마 / ERD</router-link>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped></style>
