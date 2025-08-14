<script setup></script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">스키마 / ERD</h1>
    <p class="mt-2">
      <strong class="text-xl">스키마?</strong>
      <br />
      데이터베이스의 모든 객체(테이블, 뷰 등) 정보를 모은 것. <br />
      컴퓨터로 생각하면 폴더가 되는 것이다.
    </p>

    <p>
      <strong class="text-xl">스키마의 3단계 구조</strong>
      <br />
      1. 외부 스키마 : 사용자 관점에서 필요한 데이터의 부분적 뷰 정의. <br />
      2. 개념 스키마: 데이터베이스의 전체 논리적 구조(엔티티, 속성, 데이터 타입, 관계 등)를 정의. <br />
      3. 내부 스키마: 데이터의 물리적 저장 방식(파일 구조, 인덱스 등)을 정의.
    </p>

    <p>
      <strong class="text-xl">3단계 스키마의 독립성</strong>
      <br />
      독립성 : 한 스키마를 변경해도 다른 스키마나 시스템에 영향을 주지 않는 것. <br />
      - 논리적 독립성: 개념 스키마(논리적 구조) 변경이 외부 스키마(사용자 뷰)나 응용 프로그램에 영향을 주지 않음. <br />
      - 물리적 독립성: 내부 스키마(물리적 저장 구조) 변경이 개념 스키마나 외부 스키마에 영향을 주지 않음.
    </p>

    <p>
      <strong class="text-xl">데이터 모델 표기법 (ERD)</strong>
      <br />
      ERD (Entity Relationship Diagram): 엔티티와 관계를 다이어그램으로 표현. <br />
      <strong>피터 첸</strong>이 개발한 표기법으로, 데이터 모델링의 표준. <br /><br />
      <strong>ERD 작성 절차</strong> <br />
      1. 엔티티 도출 <br />
      2. 엔티티 배치 <br />
      3. 엔티티 간 관계 설정 <br />
      4. 관계명 서술 <br />
      5. 관계의 참여도 기술 (1:1, 1:N, N:M 등) <br />
      6. 관계의 필수 여부 확인
    </p>
  </div>
</template>
