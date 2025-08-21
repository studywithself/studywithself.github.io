<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">Alias (별칭)</h1>

    <p>
      테이블이나 컬럼에 임시로 부여하는 또 다른 이름입니다. <br />

      실제 데이터나 테이블의 이름을 변경하는 것이 아니라, 출력 모습에서만 유효한 임시적인 이름입니다.
    </p>

    <p>사용법은 SELECT문 뒤에 AS 키워드를 사용하고 지정하면 되며, 생략 가능합니다.</p>
    <div class="p-4 w-100 bg-gray-200 rounded-lg shadow-lg">
      <pre><code class="language-sql">
<strong class="text-rose-600">SELECT</strong> first_name <strong class="text-rose-600">AS</strong> "last_name"
<strong class="text-rose-600">FROM</strong> example
  </code></pre>
    </div>

    <p>
      이름이 길고 복잡할 때, 쿼리문의 <strong class="text-blue-600">가독성을 향상</strong>하기 위해 사용합니다. <br />

      또는 다양한 상황에서 <strong class="text-blue-600">명확히 구분</strong>하기 위해서도 사용합니다.
    </p>

    <p>
      별칭 사용 규칙이 있습니다. <br />

      <strong class="text-blue-600">예약어는 사용 불가</strong>능합니다. <br />

      <strong class="text-blue-600">공백 및 특수문자</strong>에는 큰따옴표(”)로 묶어 사용해야 합니다. (단, 언더바(_)는 예외 가능) <br />

      <strong class="text-blue-600">별칭 부여는 SELECT와 FROM절에서만 가능합니다.</strong>
    </p>

    <p>
      FROM절에서 테이블 명을 별칭으로 정의했다면, 모든 테이블명을 별칭으로 써야합니다. <br />

      기존에 쓰던 테이블명을 사용하면 오류가 발생합니다.
    </p>

    <p>
      SELECT절에서 정의되었다면 ORDER BY절에서만 사용 가능합니다. <br />

      쿼리 실행 순서에 따라 SELECT 다음은 ORDER BY뿐이어서 인식이 불가능하기 때문입니다.
    </p>
  </div>
</template>
