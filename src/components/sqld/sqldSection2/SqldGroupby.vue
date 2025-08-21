<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">GROUP BY 절</h1>

    <p>
      <strong class="text-blue-600">SELECT문에서 특정 열(컬럼)을 기준으로 행들을 그룹으로 묶는 역할입니다.</strong> <br />

      이 절은 <strong class="text-blue-600">집계 함수</strong>와 함께 사용해 통계 정보를 얻을 때 사용합니다.
    </p>

    <p>
      GROUP BY를 사용하지 않으면 전체 테이블을 하나의 그룹으로 간주하여 계산합니다. <br />

      하지만 사용하면 지정된 컬럼의 고유값들을 기준으로 여러 그룹을 만들고, 각 그룹에 함수를 적용합니다.
    </p>

    <p>
      사용 위치는 FROM/WHERE 뒤에 위치합니다. <br />

      WHERE절로 필터링된 행들을 대상으로 그룹화를 수행합니다. <br />

      SELECT절에는 GROUP BY절에 명시된 집계 함수만 사용 가능합니다. <br />
      <br />
      만약 그룹 연산에서 제외할 대상이 있다면, WHERE 절에서 해당 행을 미리 제외해야 합니다. <br />

      또한, 데이터가 요약 되기 때문에 요약 전의 데이터와 함께 출력할 수는 없습니다. <br />

      DEPTNO를 사용하면 같은 값 끼리 묶어서 요약을 해줍니다.
    </p>
  </div>
</template>
