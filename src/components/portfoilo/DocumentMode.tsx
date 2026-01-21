import { Github } from "lucide-react";
import { SiTistory, SiVelog } from "react-icons/si";

export default function DocumentMode() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 pb-8">
        {/* Left: Profile Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-3">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              임의순
            </h3>
            <span className="text-xl font-medium text-gray-500 dark:text-gray-400">
              ImUisoon
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400 pl-1">
            Web Developer
          </p>
        </div>

        {/* Right: Contact & Links */}
        <div className="flex flex-col gap-3 text-sm md:text-base">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <span className="w-20 font-semibold text-gray-400 uppercase text-xs tracking-wider">
              Post
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Im-uisoon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 hover:underline transition-colors decoration-blue-600/30 underline-offset-4"
              >
                <Github size={16} />
                <span>Github</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://velog.io/@doran_1122/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-green-600 hover:underline transition-colors decoration-green-600/30 underline-offset-4"
              >
                <SiVelog size={16} />
                <span>Velog</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <a
                href="https://doran1122.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-orange-600 hover:underline transition-colors decoration-orange-600/30 underline-offset-4"
              >
                <SiTistory size={13} />
                <span>Tstory</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <span className="w-20 font-semibold text-gray-400 uppercase text-xs tracking-wider">
              Email
            </span>
            <a
              href="mailto:dla5420@naver.com"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              dla5420@naver.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <span className="w-20 font-semibold text-gray-400 uppercase text-xs tracking-wider">
              Mobile
            </span>
            <span className="tabular-nums">(+82) 010-3940-7145</span>
          </div>
        </div>
      </div>

      <h1 className="mt-8 py-4 text-xl font-medium">Summary</h1>
      <hr />

      <div className="py-8">
        <p>
          국립한국교통대학교 컴퓨터공학에 재학하며 K-Digital Training 과정으로
          웹 개발 역량을 체계적으로 키워왔습니다.
          <br />
          Spring 기반의 백엔드 개발과 React를 활용한 프론트엔드 구현을 중심으로,
          <br />
          MySQL 연동을 포함한 웹 전반의 흐름을 직접 설계·구현한 경험이 있습니다.
          <br />
          학업과 프로젝트를 병행하며 성적 장학금으로 등록금 전액을 수혜받았고,
          <br />
          직접 설계한 프로젝트를 기반으로 학술대회에 참가해 논문을 발표하고
          수상한 경험을 보유하고 있습니다.
          <br />
          기술의 단순한 사용에 그치지 않고 구조와 원리를 이해하는 개발자가 되어,
          <br />
          서비스의 안정성과 확장성을 제공하는 개발을 지향하고 있습니다.
        </p>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">Education</h1>
      <hr />

      <div className="py-8">
        <p className="font-bold">· 세종고운고등학교 </p>
        <p className="pl-3">자연계 (2016.03 ~ 2019.02)</p>

        <p className="pt-4 font-bold">· 국립한국교통대학교 </p>
        <p className="pl-3">컴퓨터공학과 학사 (2019.03 ~ 2026.02)</p>
        <p className="pl-3">마이크로전공 스마트드론학과</p>

        <p className="pt-4 font-bold">· 한국정보교육원</p>
        <p className="pl-3">K-Digital Training (2025.06 ~ 2026.01)</p>
        <p className="pl-3">
          자바스프링리액트로완성하는클라우드활용풀스택개발 교육과정 수료
        </p>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">Skills</h1>
      <hr />

      <div className="flex flex-col gap-4 py-8">
        <div className="flex">
          <p className="font-bold">· Language :</p>
          <p className="pl-3">Java, Python, JavaScript, TypeScript</p>
        </div>

        <div className="flex">
          <p className="font-bold">· Frontend :</p>
          <p className="pl-3">
            HTML, CSS, React, Next.js, Vue.js, Tailwind CSS
          </p>
        </div>

        <div className="flex">
          <p className="font-bold">· Backend :</p>
          <p className="pl-3">
            Spring, Spring Data JPA, Spring Security, MyBatis, JSP
          </p>
        </div>

        <div className="flex">
          <p className="font-bold">· Database :</p>
          <p className="pl-3">MySQL, PostgreSQL</p>
        </div>

        <div className="flex">
          <p className="font-bold">· Tools :</p>
          <p className="pl-3">Git, Docker (개발 환경 컨테이너화)</p>
        </div>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">License</h1>
      <hr />

      <div className="py-8">
        <p className="font-bold">· 자동자운전면허 1종</p>
        <p className="pl-3">충북지방경찰청 (2019.01)</p>

        <p className="pt-4 font-bold">· 리눅스마스터 2급</p>
        <p className="pl-3">정보통신기술자격검정 (2025.10)</p>

        <p className="pt-4 font-bold">· 정보처리기사 필기 합격</p>
        <p className="pl-3">과학기술정보통신부</p>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">Awards</h1>
      <hr />

      <div className="py-8">
        <p className="font-bold">· 제1회 드론투하 경진대회 단장상</p>
        <p className="pl-3">교통대학 산학협력단 (2025.01)</p>

        <p className="pt-4 font-bold">· 충청권 ICT SW개발 공모전 우수상</p>
        <p className="pl-3">충청 ICT IS (2025.10)</p>

        <p className="pt-4 font-bold">· 2025 추계학술대회 학생우수논문상</p>
        <p className="pl-3">한국정보통신학회 (2025.10)</p>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">Papers</h1>
      <hr />

      <div className="py-8">
        <div className="flex">
          <p className="font-bold">학교 준비물 구매·배송 통합 웹 플랫폼 개발</p>
          <p className="pl-1">
            임의순·우성희, 2025 한국정보통신학회 추계종합학술회
          </p>
        </div>
      </div>

      <h1 className="mt-4 py-4 text-xl font-medium">Projects</h1>
      <hr />

      <div className="py-8">
        <div className="flex flex-col">
          <p className="font-bold text-xl">· KitGet</p>
          <p className="pl-3">일정 : 2025.03.02 ~ 2025.06.25</p>
          <p className="pl-3">기술스택 : Vue.js, Spring Boot 3, MySQL</p>
          <p className="pl-3">서비스 : 학교 준비물 간편 조회 및 구매 플랫폼</p>
          <p className="pl-3">참여인원 : 1명</p>

          <p className="font-bold pt-4 text-xl">· 카페물자관리</p>
          <p className="pl-3">일정 : 2025.07.28 ~ 2025.08.08</p>
          <p className="pl-3">
            기술스택 : JAVA 11, Spring Boot 3, MySQL, JavaFx
          </p>
          <p className="pl-3">
            서비스 : 점포 재고 현황 실시간 확인 및 발주 요청 처리
          </p>
          <p className="pl-3">참여인원 : 3명</p>

          <p className="font-bold pt-4 text-xl">· 안전관리 웹 돌다리</p>
          <p className="pl-3">일정 : 2025.09.27 ~ 2025.10.18</p>
          <p className="pl-3">
            기술스택 : Java 21, Spring Boot 3, Next.js(React), TypeScript,
            SQLite
          </p>

          <p className="pl-3">
            서비스 : 소규모 건설현장 산업재해 예방을 위한 안전관리 웹 플랫폼
          </p>
          <p className="pl-3">참여인원 : 4명</p>

          <p className="font-bold pt-4 text-xl">· 나만의 다이어리, 벼리</p>
          <p className="pl-3">일정 : 2025.12.22 ~ 2026.01.17</p>
          <p className="pl-3">
            기술스택 : Java 21, Spring Boot 3, React, TypeScript, MySQL
          </p>
          <p className="pl-3">서비스 : 커스텀 다이어리 및 위젯 플랫폼</p>
          <p className="pl-3">참여인원 : 4명</p>
        </div>
      </div>
    </>
  );
}
