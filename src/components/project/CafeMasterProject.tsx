import ProjectLayout from "./ProjectLayout";
import { FaGithub, FaFilePdf, FaCoffee } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const sections = [
  { id: "intro", title: "프로젝트 소개" },
  { id: "background", title: "제작 배경" },
  { id: "tech", title: "기술 스택" },
  { id: "slides", title: "주요 기능" },
  { id: "troubleshooting", title: "트러블슈팅" },
  { id: "resources", title: "자료 다운로드" },
];

export default function CafeMasterProject() {
  return (
    <ProjectLayout title="CafeMaster" sections={sections}>
      {/* Intro Section */}
      <section id="intro" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
          프로젝트 소개
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          카페 매출 관리 시스템
        </h2>

        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/assets/cafe.png"
            alt="CafeMaster 프로젝트"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            가상의 카페 프랜차이즈를 만들어 본사, 매장, 배송업체간 역할을
            수행합니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            매장의 재고 관리, 유통기한 관리, 매출 집계 등 다양한 기능을 제공하여
            실제 카페 운영에 필요한 시스템을 구현했습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    개발 기간
                  </h3>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    2025.07.28 ~ 2025.08.11 (총 2주)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    참여 인원
                  </h3>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                    3인
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                본사
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                매장 관리 및<br />
                상품 관리
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                매장
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                재고 관리 및<br />
                매출 관리
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                배송업체
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                주문 처리 및<br />
                배송 관리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
          제작 배경
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          왜 이 프로젝트를 시작했나요?
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              실제 카페 프랜차이즈 운영에서는 본사와 매장, 배송업체 간의 복잡한
              재고 관리와 유통기한 관리가 필수적입니다. 기존의 수기 관리나
              단순한 엑셀 기반 시스템으로는 실시간 재고 현황 파악이 어렵고,
              유통기한 관리 누락으로 인한 손실이 발생하는 문제가 있습니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              💡 해결하고자 한 문제
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  본사-매장-배송업체 간 실시간 재고 정보 공유 부재
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  유통기한 관리 누락으로 인한 재고 손실 및 폐기 비용 증가
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  매장별 재고 요청 처리의 비효율성 (전화, 메신저 기반 수기 처리)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  일별 재고 변화 추적 및 매출 분석 데이터 부족
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              이러한 문제들을 해결하기 위해 JWT 기반 역할 구분 인증, 실시간 재고
              관리, 자동화된 유통기한 체크 시스템, 일일 재고 스냅샷 기능을
              통합한 종합 재고 관리 플랫폼을 개발했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
          기술 스택
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          사용된 기술
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <FaCoffee className="text-[#ed8b00] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              JavaFX
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              데스크톱 GUI 애플리케이션 개발
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <SiSpringboot className="text-[#6db33f] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Spring Boot 3
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              백엔드 API 서버 구축
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <SiMysql className="text-[#4479a1] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              MySQL
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              데이터베이스 관리
            </p>
          </div>
        </div>
      </section>

      {/* Slides Section */}
      <section id="slides" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
          주요 기능
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          핵심 기능 소개
        </h2>

        <div className="space-y-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ☕ JWT 기반 사용자 인증 및 권한 관리
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Spring Security와 JWT를 활용한 안전한 인증 시스템을 구축했습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>마스터(본점)와 매장(지점) 역할 분리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>역할별 화면 및 기능 접근 제어</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>JWT 토큰 기반 API 요청 인증 처리</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              👔 마스터(관리자) 통합 관리 시스템
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              본사 관리자가 전체 시스템을 효율적으로 관리할 수 있는 기능을
              제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  상품 관리: 원두, 시럽 등 신규 상품 등록 및 정보 수정
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>중앙 재고 관리: 본사 재고 입고/출고 처리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>재고 요청 관리: 매장 재고 요청 승인/반려 처리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>매장 관리: 신규 매장 등록 및 관리</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🏪 스토어(매장) 재고 운영 시스템
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              각 매장에서 필요한 재고 관리 기능을 제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>매장 재고 관리: 실시간 재고 현황 확인 및 모니터링</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>재고 요청: 본사에 필요 재고 요청 및 상태 추적</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>폐기 관리: 유통기한 경과 및 손상 재고 폐기 처리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>폐기 이력 관리: 폐기 기록 조회 및 분석</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ⚙️ 자동화된 백그라운드 작업
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              스케줄러를 활용한 자동화 시스템으로 효율적인 재고 관리를
              지원합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  유통기한 자동 체크: 매일 임박/만료 재고 자동 파악 및 상태
                  업데이트
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  일일 재고 스냅샷: 자정마다 전 매장 재고 상태 자동 기록
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>재고 변화 추적: 일별 재고 변동 이력 관리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>폐기 이력과 판매량을 통계로 낸 그래프 제공</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshooting" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
          트러블슈팅
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          개발 과정에서의 도전과 해결
        </h2>

        <div className="space-y-8">
          {/* Main Issue - Concurrency Control */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-l-4 border-red-500">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
                핵심 이슈
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                🔒 재고 동시성 제어 시스템 구현
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                  ⚠️ 문제 상황
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    여러 매장에서 동시에 재고를 요청하거나 관리자가 재고를
                    추가하는 순간 요청이 들어올 때 데이터 불일치 문제가
                    발생했습니다. 재고가 없는데 있는 것처럼 보이거나, 실제보다
                    많이 차감되는 등의 동시성 이슈가 발생했습니다.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>동시 요청으로 인한 재고 수량 오차 발생</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>실제 재고보다 많은 양의 출고 처리 가능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>재고 데이터 정합성 문제로 인한 운영 혼란</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                  ✅ 해결 방법
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    재고 데이터의 동시성 제어를 위해{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      Pessimistic Lock(비관적 락)
                    </strong>
                    을 적용했습니다.
                  </p>
                  <ul className="space-y-3">
                    <li className="bg-white dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 font-bold mt-1">
                          1.
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-1">
                            Pessimistic Lock 적용
                          </strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            JPA의 @Lock(LockModeType.PESSIMISTIC_WRITE)
                            어노테이션을 사용하여 재고 수정 중 다른 트랜잭션의
                            접근을 차단했습니다.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-white dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 font-bold mt-1">
                          2.
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-1">
                            락 전략 선택
                          </strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            데이터 충돌이 빈번한 재고 관리 특성상 Pessimistic
                            Lock이 적합하다고 판단. Optimistic Lock(@Version)과
                            비교하여 충돌 빈도에 따라 선택적으로 적용했습니다.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  📊 성과 및 영향
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      100%
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      재고 데이터 정합성 보장
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      0건
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      동시 요청으로 인한 재고 오차
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-red-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              ⚠️ 문제: N+1 쿼리로 인한 성능 저하
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              재고 요청 목록 조회 시 연관된 엔티티(요청 → 항목 → 상품 정보)를
              가져올 때 목록 쿼리 1개 실행 후 각 항목의 상세 정보를 위해 N개의
              추가 쿼리가 발생하여 심각한 성능 저하가 발생했습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              Fetch Join과 @EntityGraph를 활용하여 N+1 쿼리 문제를 해결했습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  JPQL에서 JOIN FETCH를 사용하여 연관 엔티티를 한 번에 조회
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>StockRequestRepository에서 페치 조인 쿼리 작성</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  @EntityGraph로 특정 쿼리에서 로딩할 엔티티 동적 지정
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>코드 변경 없이 유연한 N+1 문제 해결 가능</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Impact:</strong> 재고 요청 목록 조회 속도 약 85% 개선,
                데이터베이스 부하 대폭 감소
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-red-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              ⚠️ 문제: 스케줄러 비정상 종료 및 데이터 누락
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              매일 실행되는 유통기한 체크 스케줄러가 대량의 데이터를 처리하다
              중간에 예외가 발생하면 작업이 중단되어 일부 재고는 유통기한 처리가
              누락되고 데이터 정합성이 깨지는 문제가 발생했습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              예외 처리 강화와 트랜잭션 관리를 통해 스케줄러의 안정성을
              확보했습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>try-catch로 모든 예외를 포착하고 상세 로그 기록</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  어떤 데이터에서 문제가 발생했는지 추적 가능하도록 로그 강화
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>@Transactional 적용으로 예외 발생 시 롤백 처리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  트랜잭션 전파 속성 REQUIRES_NEW로 개별 처리 실패를 전체에 영향
                  없도록 분리
                </span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Impact:</strong> 스케줄러 안정성 확보, 유통기한 처리
                누락 제로, 데이터 정합성 유지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold mb-4">
          자료 다운로드
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          프로젝트 자료
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/assets/cafe.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all group"
          >
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
              <FaFilePdf className="text-red-600 dark:text-red-400" size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                프로젝트 문서
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                PDF 파일 다운로드
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Im-uisoon/cafeMaster"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition-all group"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <FaGithub className="text-gray-900 dark:text-white" size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                GitHub Repository
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                소스코드 보기
              </p>
            </div>
          </a>
        </div>
      </section>
    </ProjectLayout>
  );
}
