<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">속성 Attribute</h1>
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
      세로로 한 줄씩 보겠습니다. 위 표에서 번호, 이름, 성별이 있고 하위 내용은 각 사람에게 맞는 값이 들어갑니다. <br />

      이렇게 세로줄 기준으로 개념의 공통적인 묶음을 표현할 수 있으며, 이를 <strong class="text-blue-600">속성</strong> 이라고 합니다. <br />

      다른 이름으로는 <strong class="text-blue-600">컬럼, 열, 필드</strong> 라고 불립니다. <br />

      각 속성은 구체적인 값을 가져야 합니다. 범위를 정하고 그 안에서 내용이 채워집니다. <br />
    </p>
    <p>
      그리고 속성 값이 총 몇 개인지 세는 단위는 <strong class="text-blue-600">차수</strong> 라고 합니다. <br />

      즉, 해당 엔터티에는 속성은 3개 있고, 차수의 값은 3입니다. <br />
    </p>
    <p>
      속성을 알게 되었으니 말씀드리자면, 엔터티 생성에는 조건이 있었습니다. <br />

      한 엔터티에는 2개 이상의 인스턴스와 속성을 가져야 합니다. <br />

      다시 말해 최소 2x2 사이즈의 표가 만들어져야 합니다. <br />
    </p>
    <p>
      속성명은 전체 테이블에서 유일해야 합니다. <br />

      속성에 여러 개의 값을 넣고 싶다면 별도의 테이블을 만들어야 합니다. <br />

      정해진 주식별자에 함수적 종속성 또한 가지고 있어야 합니다. <br />

      위 두 개는 추후 정규화 단원에서 구체적으로 설명드리겠습니다. <br />
    </p>

    <p>
      속성은 다음 세 가지 기준에 따라 분류할 수 있습니다. <br />

      <strong>1. 속성의 특성에 따른 분류</strong> <br />
      1. 기본 속성 : 업무에서 추출된 속성으로, 엔터티에서 가장 일반적이고 기본적으로 많이 존재하는 속성입니다. <br />
      2. 설계 속성 : 기본 속성 외에 업무를 효율적으로 지원하기 위해 새로 만들거나 변형한 속성입니다. <br />
      3. 파생 속성 : 다른 속성들의 값을 기반으로 연산하여 계산된 결괏값을 가진 속성입니다. <br />
      <strong>2. 엔터티 구성 방식에 따른 분류</strong> <br />
      1. 기본키: 인스턴스를 유일하게 식별할 수 있는 속성입니다. <br />
      2. 외래키 : 다른 엔터티와의 관계를 표현하기 위해 포함된 속성입니다. <br />
      3. 일반 속성 : 기본키나 외래키에 해당하지 않는 일반적인 속성입니다. <br />
      <strong>3. 분해 여부에 따른 속성</strong> <br />
      1. 단일 속성 : 하나의 의미를 가진 속성입니다. <br />
      2. 복합 속성 : 여러 의미가 합쳐져 하나의 속성을 구성하는 경우입니다. (주소:시-구-동) <br />
      3. 다중 값 속성 : 하나의 속성이 여러 개의 값을 가질 수 있는 경우로, 원자성 원칙에 위배됩니다. <br />
    </p>

    <h2 class="text-blue-600 font-bold text-xl my-2">도메인</h2>
    <p>
      속성에서 [이름] 아래에 작성된 홍길동, 심청이와 같은 데이터가 있습니다. <br />

      인스턴스의 하나의 칸(cell)을 <strong class="text-blue-600">도메인</strong> 이라고 합니다. <br />

      도메인은 속성에 따라 값을 가질 수 있는 단위입니다. <br />

      해당 테이블에는 도메인이 6개 있습니다. (1, 홍길동, 남자, 2, 심청이, 여자) <br />
    </p>

    <p>
      도메인은 속성의 범위 안에서 허용 값의 범위를 지정할 수 있습니다. <br />

      [나이]라는 속성 아래에서 도메인이 0~120세 이렇게 지정하고, 그 안에서만 입력이 가능하도록 할 수 있습니다. <br />

      또한, 도메인은 원자성을 권장합니다. 원자성이란, 한 도메인 칸에 하나의 값만 들어가는 것을 의미합니다. <br />

      만약, 두 개 이상의 값이 있다면 다른 인스턴스를 만들어 넣어야 합니다. <br />
    </p>
  </div>
</template>
