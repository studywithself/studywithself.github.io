<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">트랜잭션 Transaction</h1>

    <p>
      트랜잭션은 데이터베이스의 상태를 변경시키는 하나의 <strong class="text-blue-600">논리적인 작업 단위</strong>입니다. <br />
      예를 들어, 은행 계좌 이체는 '내 계좌에서 돈을 인출하는 작업'과 <br />
      '상대방 계좌에 돈을 입금하는 작업'이 <strong class="text-blue-600">하나로 묶인 트랜잭션입니다.</strong>
    </p>

    <p>
      트랜잭션의 가장 중요한 특징은 작업들이 모두 성공하거나(COMMIT), 모두 실패하여 취소되어야(ROLLBACK) 한다는 것입니다. <br />
      트랜잭션은 중간에 멈추거나 일부만 완료될 수 없으며, 이러한 성질을 <strong class="text-blue-600">원자성(Atomicity)</strong>이라고 합니다. <br />
      이처럼 데이터의 안정성과 신뢰성을 보장하기 위해 모든 작업은 독립적인 단위로 처리됩니다.
    </p>
  </div>
</template>
