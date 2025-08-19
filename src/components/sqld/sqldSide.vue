<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">SQLD</h2>
    <ul class="flex flex-col gap-3">
      <router-link to="/sqld/overview">Overview</router-link>
      <p class="select-none text-blue-500">1과목</p>
      <router-link to="/sqld/database">Database</router-link>
      <router-link to="/sqld/entity">Entity</router-link>
      <router-link to="/sqld/attribute">속성</router-link>
      <router-link to="/sqld/tuple">튜플</router-link>
      <router-link to="/sqld/null">NULL과 0차이</router-link>
      <router-link to="/sqld/key">식별자(Key)</router-link>
      <router-link to="/sqld/normalization">정규화</router-link>
      <router-link to="/sqld/normalization2">정규형</router-link>
      <router-link to="/sqld/schema">스키마</router-link>
      <router-link to="/sqld/relationship">관계</router-link>
      <router-link to="/sqld/modeling">모델링</router-link>
      <router-link to="/sqld/erd">ERD</router-link>
      <router-link to="/sqld/transaction">트랜잭션</router-link>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped></style>
