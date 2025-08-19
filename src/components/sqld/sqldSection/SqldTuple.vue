<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">튜플</h1>

    <table class="border-collapse border border-gray-300 w-80 text-center">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">번호</th>
          <th class="border border-gray-300 px-4 py-2">이름</th>
          <th class="border border-gray-300 px-4 py-2">성별</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">1</td>
          <td class="border border-gray-300 px-4 py-2">홍길동</td>
          <td class="border border-gray-300 px-4 py-2">남자</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">2</td>
          <td class="border border-gray-300 px-4 py-2">심청이</td>
          <td class="border border-gray-300 px-4 py-2">여자</td>
        </tr>
      </tbody>
    </table>

    <p>
      위 표에서 번호 1번을 보면, 이름은 홍길동이고 성별은 남자입니다. <br />

      이렇게 가로줄로 속성 값에 맞게 입력된 정보를 <strong class="text-blue-600">튜플</strong>이라고 합니다. 다른 이름으로는 <strong class="text-blue-600">행, 레코드</strong> 입니다. <br />

      단, 최상단 행인 속성의 제목은 튜플로 간주하지 않습니다. <br />

      튜플의 순서는 상관없지만, 완전히 중복되는 값인 튜플이 있어서는 안됩니다. (그렇게 되면 동일 자료 여러 개를 보유하기 때문) <br />

      → 속성의 값에 맞게 채워진 가로줄을 튜플이라고 하며, 순서는 상관없고 중복 값은 허용되지 않는다. <br />
    </p>

    <p>
      또한 튜플의 개수를 셀 수 있는 단위를 <strong class="text-blue-600">카디널리티</strong>라고 합니다. <br />

      해당 테이블에는 2개의 튜플이 있고, 카디널리티 값은 2입니다. <br />
    </p>

    <p>지금까지의 과정으로 표 전체를 테이블, 가로 데이터값을 튜플, 세로 데이터값을 속성이라고 정의함을 알았습니다.</p>
  </div>
</template>
