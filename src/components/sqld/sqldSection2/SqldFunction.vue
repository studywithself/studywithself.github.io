<script setup></script>
<template>
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-bold">함수</h1>

    <p>
      <strong class="text-blue-600">SQL 함수</strong>는 데이터베이스 내의 데이터를 처리하고 계산하는 데 사용되는 명령어입니다. <br />

      함수를 사용하면 복잡한 연산을 간단하게 처리하고, 데이터 가공 및 분석을 효율적으로 할 수 있습니다.
    </p>

    <h2 class="text-blue-600 font-bold text-xl my-2">단일 행 함수</h2>
    <p>
      <strong class="text-blue-600">행 하나</strong>를 입력받아 <strong class="text-blue-600">결과값 하나</strong>를 반환합니다. <br />

      주로 <strong class="text-blue-600">SELECT</strong>절이나 <strong class="text-blue-600">WHERE</strong>절에서 사용되며, 각 행에 대해 독립적으로 연산을 수행합니다.
    </p>

    <strong>문자열 함수 : 문자열을 조작합니다</strong>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">문법</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">LOWER</td>
            <td class="py-3 px-4">LOWER(문자열)</td>
            <td class="py-3 px-4">문자열을 모두 소문자로 변환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">UPPER</td>
            <td class="py-3 px-4">UPPER(문자열)</td>
            <td class="py-3 px-4">문자열을 모두 대문자로 변환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">SUBSTR</td>
            <td class="py-3 px-4">SUBSTR(대상, 시작위치, 길이)</td>
            <td class="py-3 px-4">대상 문자열의 시작위치부터 지정된 길이만큼 추출합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">INSTR</td>
            <td class="py-3 px-4">INSTR(대상, 찾을문자, 시작위치, 발생횟수)</td>
            <td class="py-3 px-4">대상 문자열에서 찾을 문자열이 나타나는 위치를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">TRIM</td>
            <td class="py-3 px-4">TRIM([삭제문자] FROM 대상)</td>
            <td class="py-3 px-4">대상 문자열의 양쪽 끝에서 특정 문자를 삭제합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">LTRIM</td>
            <td class="py-3 px-4">LTRIM(대상, 삭제문자열)</td>
            <td class="py-3 px-4">대상 문자열의 왼쪽에서 특정 문자열을 제거합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">RTRIM</td>
            <td class="py-3 px-4">RTRIM(대상, 삭제문자열)</td>
            <td class="py-3 px-4">대상 문자열의 오른쪽에서 특정 문자열을 제거합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">LPAD</td>
            <td class="py-3 px-4">LPAD(대상, 전체길이, 채울문자)</td>
            <td class="py-3 px-4">대상 문자열의 왼쪽에 채울 문자를 추가하여 전체 길이를 맞춥니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">RPAD</td>
            <td class="py-3 px-4">RPAD(대상, 전체길이, 채울문자)</td>
            <td class="py-3 px-4">대상 문자열의 오른쪽에 채울 문자를 추가하여 전체 길이를 맞춥니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">CONCAT</td>
            <td class="py-3 px-4">CONCAT(대상1, 대상2)</td>
            <td class="py-3 px-4">두 문자열을 결합합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">LENGTH</td>
            <td class="py-3 px-4">LENGTH(대상)</td>
            <td class="py-3 px-4">해당 문자열의 길이(문자 수)를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">REPLACE</td>
            <td class="py-3 px-4">REPLACE(대상, 찾을문자열, 바꿀문자열)</td>
            <td class="py-3 px-4">대상 문자열에서 찾을 문자열과 일치하는 모든 부분을 바꿀 문자열로 치환합니다.</td>
          </tr>
          <tr>
            <td class="py-3 px-4">TRANSLATE</td>
            <td class="py-3 px-4">TRANSLATE(대상, 찾을문자, 바꿀문자)</td>
            <td class="py-3 px-4">대상 문자열의 각 문자를 1대1로 대응하여 치환합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <strong>숫자 함수 : 숫자를 계산합니다.</strong>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">문법</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">ROUND</td>
            <td class="py-3 px-4">ROUND(숫자, 반올림할_자릿수)</td>
            <td class="py-3 px-4">숫자를 지정된 자릿수에서 반올림합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">TRUNC</td>
            <td class="py-3 px-4">TRUNC(숫자, 버릴_자릿수)</td>
            <td class="py-3 px-4">숫자의 소수점 이하를 지정된 자릿수까지만 남기고 나머지를 버립니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">MOD</td>
            <td class="py-3 px-4">MOD(나눠질_수, 나눌_수)</td>
            <td class="py-3 px-4">나눗셈 후의 나머지 값을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">CEIL</td>
            <td class="py-3 px-4">CEIL(숫자)</td>
            <td class="py-3 px-4">숫자보다 크거나 같은 가장 작은 정수를 반환합니다. (올림)</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">FLOOR</td>
            <td class="py-3 px-4">FLOOR(숫자)</td>
            <td class="py-3 px-4">숫자보다 작거나 같은 가장 큰 정수를 반환합니다. (내림)</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">POWER</td>
            <td class="py-3 px-4">POWER(숫자1, 숫자2)</td>
            <td class="py-3 px-4">숫자1을 숫자2만큼 제곱한 값을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">SQRT</td>
            <td class="py-3 px-4">SQRT(숫자)</td>
            <td class="py-3 px-4">숫자의 제곱근 값을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">ABS</td>
            <td class="py-3 px-4">ABS(숫자)</td>
            <td class="py-3 px-4">숫자의 절대값을 반환합니다.</td>
          </tr>
          <tr>
            <td class="py-3 px-4">SIGN</td>
            <td class="py-3 px-4">SIGN(숫자)</td>
            <td class="py-3 px-4">숫자가 양수면 1, 음수면 -1, 0이면 0을 반환합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <strong>날짜 함수 : 날짜와 시간을 계산하거나 조작합니다</strong>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">문법</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">SYSDATE</td>
            <td class="py-3 px-4">SYSDATE()</td>
            <td class="py-3 px-4">현재 시스템의 날짜와 시간을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">CURRENT_DATE</td>
            <td class="py-3 px-4">CURRENT_DATE()</td>
            <td class="py-3 px-4">현재 시스템의 날짜를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">CURRENT_TIMESTAMP</td>
            <td class="py-3 px-4">CURRENT_TIMESTAMP()</td>
            <td class="py-3 px-4">현재 시스템의 타임스탬프를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">ADD_MONTHS</td>
            <td class="py-3 px-4">ADD_MONTHS(날짜, n)</td>
            <td class="py-3 px-4">지정된 날짜에 n 개월을 더한 날짜를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">MONTHS_BETWEEN</td>
            <td class="py-3 px-4">MONTHS_BETWEEN(날짜1, 날짜2)</td>
            <td class="py-3 px-4">두 날짜 사이의 개월 수를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">LAST_DAY</td>
            <td class="py-3 px-4">LAST_DAY(날짜)</td>
            <td class="py-3 px-4">해당 월의 마지막 날짜를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">NEXT_DAY</td>
            <td class="py-3 px-4">NEXT_DAY(날짜, n)</td>
            <td class="py-3 px-4">주어진 날짜 이후에 오는 지정된 요일의 첫 번째 날짜를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">ROUND</td>
            <td class="py-3 px-4">ROUND(날짜, 단위)</td>
            <td class="py-3 px-4">날짜를 지정된 단위로 반올림합니다.</td>
          </tr>
          <tr>
            <td class="py-3 px-4">TRUNC</td>
            <td class="py-3 px-4">TRUNC(날짜, 단위)</td>
            <td class="py-3 px-4">날짜를 지정된 단위로 버림합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-blue-600 font-bold text-xl my-2">집계 함수</h2>
    <p>
      집계 함수(그룹 함수)는 <strong class="text-blue-600">여러 행</strong>을 입력받아 <strong class="text-blue-600">결과값 하나</strong>를 반환합니다. <br />

      이 함수는 주로 <strong class="text-blue-600">GROUP BY</strong> 절과 함께 사용되어 데이터를 요약하거나 집계하는 데 사용됩니다. <br />

      COUNT(*) 제외 대부분 계산 대상에 NULL이 포함 되어있을 경우, 무시하고 연산을 수행합니다.
    </p>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">COUNT()</td>
            <td class="py-3 px-4">그룹의 행 개수를 계산합니다. NULL 값을 포함할지 여부에 따라 COUNT(*)와 COUNT(컬럼명)으로 구분됩니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">SUM()</td>
            <td class="py-3 px-4">그룹의 합계를 계산합니다. 숫자형 데이터에만 적용 가능합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">AVG()</td>
            <td class="py-3 px-4">그룹의 평균값을 계산합니다. NULL 값을 제외하고 계산합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">MIN()</td>
            <td class="py-3 px-4">그룹의 최솟값을 찾습니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">MAX()</td>
            <td class="py-3 px-4">그룹의 최댓값을 찾습니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">VARIANCE()</td>
            <td class="py-3 px-4">그룹의 분산을 계산합니다.</td>
          </tr>
          <tr>
            <td class="py-3 px-4">STDDEV()</td>
            <td class="py-3 px-4">그룹의 표준편차를 계산합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-blue-600 font-bold text-xl my-2">변환 함수</h2>
    <p>
      <strong class="text-blue-600">변환 함수</strong>는 값의 <strong class="text-blue-600">데이터 타입</strong>을 다른 타입으로 변환하는 데 사용됩니다. <br />

      문자, 숫자, 날짜 등 서로 다른 타입 간의 연산을 수행할 때 유용하게 쓰입니다.
    </p>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">문법</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">TO_NUMBER</td>
            <td class="py-3 px-4">TO_NUMBER(문자열)</td>
            <td class="py-3 px-4">문자열을 숫자 타입으로 변환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">TO_CHAR</td>
            <td class="py-3 px-4">TO_CHAR(대상, 포맷)</td>
            <td class="py-3 px-4">숫자를 문자열로 변환하거나, 날짜를 지정된 형식의 문자열로 변환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">TO_DATE</td>
            <td class="py-3 px-4">TO_DATE(문자열, 포맷)</td>
            <td class="py-3 px-4">주어진 문자열을 지정된 포맷에 맞춰 날짜 타입으로 변환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">FORMAT</td>
            <td class="py-3 px-4">FORMAT(날짜, 포맷)</td>
            <td class="py-3 px-4">날짜의 포맷을 지정된 형식으로 변경합니다. (주로 MySQL에서 사용)</td>
          </tr>
          <tr>
            <td class="py-3 px-4">CAST</td>
            <td class="py-3 px-4">CAST(대상 AS 데이터타입)</td>
            <td class="py-3 px-4">대상을 지정된 데이터 타입으로 변환합니다. 다양한 데이터 타입 간의 변환에 사용되는 범용적인 함수입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-blue-600 font-bold text-xl my-2">일반 함수</h2>
    <p>
      <strong class="text-blue-600">일반 함수</strong>는 특정 데이터 타입에 국한되지 않고, 조건부 로직이나 NULL 값 처리와 같은 다양한 용도로 쓰입니다. <br />
      특히 NULL값 관련 함수와 조건문 함수들이 자주 활용됩니다.
    </p>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-4 text-left font-semibold">함수</th>
            <th class="py-3 px-4 text-left font-semibold">문법</th>
            <th class="py-3 px-4 text-left font-semibold">기능</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">DECODE</td>
            <td class="py-3 px-4">DECODE(대상, 값1, 리턴1, 값2, 리턴2, ... , [그 외 리턴])</td>
            <td class="py-3 px-4">대상이 값1과 같으면 리턴1을, 값2와 같으면 리턴2를 반환합니다. 일치하는 값이 없으면 [그 외 리턴] 값을 반환하며, 이 값이 생략되면 NULL을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">NVL</td>
            <td class="py-3 px-4">NVL(대상, 치환값)</td>
            <td class="py-3 px-4">오라클에서 사용하는 함수로, 대상 값이 NULL이면 치환값으로 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">NVL2</td>
            <td class="py-3 px-4">NVL2(대상, 치환값1, 치환값2)</td>
            <td class="py-3 px-4">대상이 NULL이 아니면 치환값1을, NULL이면 치환값2를 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200 bg-gray-50">
            <td class="py-3 px-4">COALESCE</td>
            <td class="py-3 px-4">COALESCE(대상1, 대상2, ...)</td>
            <td class="py-3 px-4">여러 대상 값 중에서 처음으로 NULL이 아닌 값을 반환합니다. 모든 대상이 NULL이면 NULL을 반환합니다.</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-3 px-4">ISNULL</td>
            <td class="py-3 px-4">ISNULL(대상, 치환값)</td>
            <td class="py-3 px-4">SQL Server에서 사용하는 함수로, 대상이 NULL이면 치환값을 반환합니다. NVL과 동일한 기능입니다.</td>
          </tr>
          <tr>
            <td class="py-3 px-4">NULLIF</td>
            <td class="py-3 px-4">NULLIF(대상1, 대상2)</td>
            <td class="py-3 px-4">두 값(대상1, 대상2)이 서로 같으면 NULL을 반환하고, 다르면 대상1을 반환합니다.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      <strong class="text-blue-600">CASE문</strong>은 DECODE가 동등 비교만을 지원하는 반면, 확장하여 다양한 조건을 사용할 수 있게 만들어줍니다. <br />

      ELSE 절은 선택 사항이며, 생략 시 NULL을 반환합니다.
    </p>
    <div class="p-4 w-100 bg-gray-200 rounded-lg shadow-lg">
      <pre><code class="language-sql">
<strong class="text-rose-600">CASE</strong>
  <strong class="text-rose-600">WHEN</strong> 조건1 <strong class="text-rose-600">THEN</strong> 결과1
  <strong class="text-rose-600">WHEN</strong> 조건2 <strong class="text-rose-600">THEN</strong> 결과2
  <strong class="text-rose-600">...</strong>
  <strong class="text-rose-600">ELSE</strong> 그 외 결과
<strong class="text-rose-600">END</strong>
  </code></pre>
    </div>
  </div>
</template>
