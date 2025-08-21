<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">ORDER BY 절</h1>
    <p>
      쿼리 결과로 나온 <strong class="text-blue-600">행들을 특정 컬럼을 기준으로 정렬</strong>할 때 사용합니다. <br />

      기본적으로 오름차순으로 되어있습니다. 생략 가능합니다. <br />

      ASC : 오름차순, DESC : 내림차순 <br />

      유일하게 SELECT 절에 정의된 별칭을 사용 가능합니다. <br />

      SELECT절에 명시된 컬럼의 순서를 사용해 컬럼 순번을 정할 수도 있습니다.
    </p>

    <h2 class="text-blue-600 font-bold text-xl my-2">복합 정렬</h2>
    <p>
      먼저 정렬한 값의 동일한 결과가 있을 경우 추가적으로 정렬 가능한 기능입니다. <br />

      즉, 1차 정렬 후 우위를 가릴 수 없는 동등한 자료가 있는 경우 2차 정렬 조건으로 정렬 가능 <br />

      ex. 태어난 년도를 기준으로 정렬 후, 동갑이 나오자 생일 순서로 정렬 (생일도 같다면 이름순 정렬 …)
    </p>
    <h2 class="text-blue-600 font-bold text-xl my-2">NULL의 정렬</h2>
    <p>
      NULL을 포함한 값의 정렬 시 오라클은 기본적으로 NULL을 마지막에 배치(SQL Server는 첫번째 배치) <br />

      오라클은 NULL FIRST 또는 NULL LAST를 사용하여 순서 변경 가능합니다.
    </p>
  </div>
</template>
