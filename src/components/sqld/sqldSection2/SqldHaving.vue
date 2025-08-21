<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">HAVING 절</h1>
    <p>
      <strong class="text-blue-600">GROUP BY절</strong>로 <strong class="text-blue-600">그룹화된 결과</strong>에 대해 <strong class="text-blue-600">조건을 적용</strong>하여 <strong class="text-blue-600">필터링</strong>합니다. <br />

      <strong class="text-blue-600">WHERE절</strong>이 개별 행을 필터링하는 것과 달리, 이미 그룹으로 묶인 데이터에 조건을 적용합니다. <br />
      내부 연산 순서가 <strong class="text-blue-600">SELECT 절</strong>보다 먼저이기 때문에, <strong class="text-blue-600">Alias(별칭)</strong> 사용 불가합니다.
    </p>
  </div>
</template>
