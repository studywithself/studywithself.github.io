<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">정규화</h1>

    <p>
      정규화를 하는 이유는 하나의 엔터티에 많은 속성을 넣으면 복잡하기 때문입니다. <br />

      최소화된 데이터만을 넣고, 데이터를 역할에 맞게 <strong class="text-blue-600">분해하는 과정</strong>을 정규화라고 합니다. <br />
    </p>
    <p>
      정규화는 데이터베이스에 있어서 필요한 작업입니다. <br />

      프로젝트를 진행할 때 DB 설계를 잘 모르는 사람들과 항상 갈등이 생기는 요소이기도 합니다. <br />

      보통 잘 모르는 사람들은 한 테이블에 속성을 다 넣고 조회하는거랑 정규화해서 조인으로 불러오는것과 다를게 없다고 주장합니다. <br />

      정규화는 형식적인 절차가 아닌 <strong class="text-blue-600">고품질 데이터베이스 설계의 실질적인 방법</strong>입니다. <br />

      <strong class="text-blue-600">신뢰성, 일관성, 확장성</strong> 등 다양한 요소를 고려하지 않은 발언인겁니다. <br />
    </p>
    <p>
      쉽게 생각해 한 사람에게 일을 받는대로 시킬 수 있습니다. 전산, 인사, 회계 다 할 수도 있습니다. <br />

      그는 만능일꾼이겠지만, 그런식으로 하는 것보단 전문 부서를 만들어서 <br />

      전산팀, 인사팀, 감사팀 이렇게 나누고 인력 분배하는게 더 효율적이고 전문성이 높아집니다. <br />
    </p>
    <h2 class="text-blue-600 font-bold text-xl my-2">이상현상</h2>
    <p>
      이상현상은 정규화를 하지 않아 발생하는 현상입니다. 3가지로 구성됩니다. <br />

      삽입이상 : 데이터를 추가할 때 불필요하거나 관련 없는 데이터까지 함께 넣어야 되는 문제 <br />

      갱신이상 : 중복된 데이터 중 일부만 수정되어 데이터 불일치가 되는 문제 <br />

      삭제이상 : 데이터 삭제 시 원치 않은 데이터까지 같이 삭제되는 문제 <br />
    </p>

    <table class="border-collapse border border-gray-300 w-80 text-center">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">상품명</th>
          <th class="border border-gray-300 px-4 py-2">색상</th>
          <th class="border border-gray-300 px-4 py-2">가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">젤리케이스</td>
          <td class="border border-gray-300 px-4 py-2">분홍</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">하드케이스</td>
          <td class="border border-gray-300 px-4 py-2">파랑</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
      </tbody>
    </table>

    <p>
      핸드폰 케이스를 정리하고자 합니다. 위 테이블같은 상품이 있습니다. <br />

      색상이 하나뿐이고 제품 이름만 쓰면 되는데 굳이 억지로 색상을 써야만 작성이 완료 되는 경우가 <strong class="text-blue-600">삽입이상</strong>입니다. <br />
    </p>

    <table class="border-collapse border border-gray-300 w-80 text-center">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">상품명</th>
          <th class="border border-gray-300 px-4 py-2">색상</th>
          <th class="border border-gray-300 px-4 py-2">가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">개껌</td>
          <td class="border border-gray-300 px-4 py-2">우유</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">개껌</td>
          <td class="border border-gray-300 px-4 py-2">소고기</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
      </tbody>
    </table>

    <p>
      이번에는 개껌 가격을 바꾸고 싶습니다. <br />

      같은 개껌이지만 맛이 달라서 구분되어있는 튜플을 볼 수 있습니다. <br />

      물가 상승으로 인해 가격을 12,000원으로 올릴 예정입니다. [개껌] 가격을 올리면 되겠죠?<br />

      그런데 한 행만 수정하고 다른 행이 수정되지 않는 데이터 불일치 현상이 발생했습니다. <br />

      같은 개껌이고 같은 가격이어야 하는데 우유맛 개껌만 가격이 오른 경우가 생긴겁니다. <br />

      이는 <strong class="text-blue-600">갱신이상</strong>이 됩니다. <br />
    </p>

    <table class="border-collapse border border-gray-300 w-80 text-center">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">상품명</th>
          <th class="border border-gray-300 px-4 py-2">색상</th>
          <th class="border border-gray-300 px-4 py-2">가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 px-4 py-2">개껌</td>
          <td class="border border-gray-300 px-4 py-2">우유</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">개껌</td>
          <td class="border border-gray-300 px-4 py-2">소고기</td>
          <td class="border border-gray-300 px-4 py-2">10,000원</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">젤리</td>
          <td class="border border-gray-300 px-4 py-2">소고기</td>
          <td class="border border-gray-300 px-4 py-2">5,000원</td>
        </tr>
      </tbody>
    </table>

    <p>
      이번에는 소고기맛 개껌이 품절되어 판매 리스트에서 삭제하려고 합니다. <br />

      하지만 개껌에 대한 정보가 오직 이 테이블에만 존재한다면,<br />

      판매 리스트에서만 삭제하려던 의도와 달리 실질적으로는 해당 상품의 정보 자체가 삭제되는 문제가 발생합니다. <br />

      또한, 만약 [개껌]을 삭제하면 같은 행에 있던 우유맛도 함께 사라지고, <br />

      [소고기]만 지우려 해도 젤리가 함께 삭제되는 등 의도하지 않은 데이터까지 삭제되는 상황이 생길 수 있습니다. <br />

      (개껌,소고기)를 지우면 되겠지만 이를 간과하면 원치 않은 다른 데이터도 함께 지워지는 현상이 생깁니다. <br />

      이렇게 필요한 데이터만 삭제하려다가 원치 않는 다른 정보까지 함께 지워지는 현상을 <strong class="text-blue-600">삭제이상</strong>이라고 합니다. <br />
    </p>

    <p>정규화에 따른 형태를 <strong class="text-blue-600">정규형</strong>이라고 합니다. 내용이 길어져 나누겠습니다.</p>
  </div>
</template>
