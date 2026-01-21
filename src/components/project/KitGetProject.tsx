import ProjectLayout from "./ProjectLayout";
import { FaGithub, FaFilePdf } from "react-icons/fa";
import { SiVuedotjs, SiSpringboot, SiMysql, SiRailway } from "react-icons/si";

const sections = [
  { id: "intro", title: "프로젝트 소개" },
  { id: "background", title: "제작 배경" },
  { id: "tech", title: "기술 스택" },
  { id: "slides", title: "주요 기능" },
  { id: "troubleshooting", title: "트러블슈팅" },
  { id: "resources", title: "자료 다운로드" },
];

export default function KitGetProject() {
  return (
    <ProjectLayout title="KitGet" sections={sections}>
      {/* Intro Section */}
      <section id="intro" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
          프로젝트 소개
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          KitGet
        </h2>

        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/assets/kitget.png"
            alt="KitGet 프로젝트"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            기존의 번거롭고 혼동을 유발하는 준비물 준비에 있어 더욱 편리하고
            효율적인 방법을 제공하는 플랫폼입니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            교사, 학생, 매장의 목적에 맞게 서비스를 제공하여 준비물 준비를 더욱
            효율적으로 할 수 있도록 개발하였습니다.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  개발 기간
                </h3>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  2025.03.02 ~ 2025.06.16
                </p>
              </div>
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              대전 초등학교 교사대상 설문조사에 따르면 학교 현장에서 준비물
              준비는 교사가 준비한다고 94%가 응답했습니다. 또한, 학교 준비물
              구매와 관련한 업무부담 가중 문제점에 36%가 응답했습니다. <br />
              교사는 매번 준비물을 준비하고 관리해야하며, 개별 학부모에게
              연락해야합니다. <br />
              학부모는 여러 채널을 통해 전달되는 준비물 정보를 놓치기 쉽습니다.{" "}
              <br />
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              특히 준비물을 구매하는 과정에서 어디서 사야 할지 찾아다니는 시간,
              준비물을 깜빡하는 경우, 중복 구매 등의 문제가 반복적으로
              발생했습니다.
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
                  교사의 반복적인 준비물 관리 업무 부담 완화
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  학부모/학생의 준비물 정보 확인 및 구매의 불편함 해소
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  매장과 학교 간 비효율적인 준비물 유통 구조 개선
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  학교 주변 문구점을 활용한 지역상권 활성화
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              이러한 문제들을 해결하기 위해 교사, 학생/학부모, 매장을 하나의
              플랫폼으로 연결하여 준비물 준비 과정을 자동화하고 효율화하는 통합
              시스템을 개발했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                교사
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                준비물 목록 생성 및<br />
                일괄 구매 관리
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                학생/학부모
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                간편한 준비물
                <br />
                확인 및 구매
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                매장
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                주문 관리 및<br />
                배송 처리
              </p>
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#4fc08d] dark:hover:border-[#4fc08d] transition-all">
            <SiVuedotjs className="text-[#4fc08d] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Vue.js
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              반응형 프론트엔드 개발
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#6db33f] dark:hover:border-[#6db33f] transition-all">
            <SiSpringboot className="text-[#6db33f] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Spring Boot 3
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              RESTful API 서버 구축
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-[#4479a1] dark:hover:border-[#4479a1] transition-all">
            <SiMysql className="text-[#4479a1] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              MySQL
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              데이터베이스 관리
            </p>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">🚀</span>
            배포 환경
          </h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <SiRailway
                  className="text-[#0B0D0E] dark:text-white"
                  size={48}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Railway
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Railway를 활용하여{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    CI/CD 파이프라인
                  </strong>
                  을 구축했습니다. GitHub에 코드를 Push하면 자동으로 빌드 및
                  배포되어 개발 생산성을 크게 향상시켰습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    자동 배포
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    GitHub 연동
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    무중단 배포
                  </span>
                </div>
              </div>
            </div>
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
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">📝</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  준비물 목록 생성 및 관리
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  교사가 수업에 필요한 준비물을 쉽게 등록하고, 해시태그를 통해
                  분류할 수 있습니다. <br />
                  학생들은 실시간으로 업데이트되는 준비물 목록을 확인할 수
                  있습니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>
                      준비물 등록 시 이름, 설명, 이미지, 해시태그 입력
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>해시태그 기반 준비물 검색 및 필터링</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>준비물 수정 및 삭제 기능</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">🛒</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  통합 주문 시스템
                </h3>
                <p className="text-gray-600 dark:text-gray-400 ">
                  교사가 선택한 준비물을 학교 주변 매장에 일괄 주문할 수 있는
                  시스템입니다.
                  <br />
                  <strong className="text-blue-600 dark:text-blue-400">
                    스냅샷 패턴
                  </strong>
                  을 적용하여 주문 당시의 준비물 정보를 영구 보존합니다.
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  ※ 스냅샷 패턴이란 주문 당시의 데이터를 그대로 저장하여 이후
                  데이터 변경에 영향을 받지 않는 설계 기법입니다.
                </p>

                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>장바구니에 준비물 추가 및 수량 조절</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>
                      주문 완료 후 원본 준비물 정보가 변경되어도 주문 이력은
                      불변 유지
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>
                      주문 상세 정보 조회 시 단일 테이블 조회로 성능 최적화
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">📍</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  위치 기반 매장 검색
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  학교 주변의 문구점을 자동으로 찾아주는 위치 기반 서비스입니다.
                  외부 API에만 의존하지 않고
                  <br />
                  <strong className="text-blue-600 dark:text-blue-400">
                    Haversine 공식
                  </strong>
                  을 직접 구현하여 안정성을 높였습니다.
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  ※ Haversine 공식은 두 지점 간의 최단 거리를 구하는
                  알고리즘으로, 직선거리를 구할 수 있습니다.
                </p>

                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>
                      학교와 매장 간 거리 계산 (Haversine 지구 구면 거리
                      알고리즘)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>
                      주소 정규화(Regex, 도로명주소) 및 캐싱으로 조회 성능 개선
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>외부 API 장애 시에도 서비스 정상 운영 가능</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">📦</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  매장 주문 관리
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  매장 사장님이 들어온 주문을 확인하고 배송 상태를 관리할 수
                  있는 시스템입니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>실시간 주문 알림 및 주문 목록 조회</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>주문 상태 업데이트 (접수, 준비중, 배송중, 완료)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>번호표 발급으로 효율적인 준비물 처리기능 제공</span>
                  </li>
                </ul>
              </div>
            </div>
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
          {/* Main Issue - Snapshot Pattern */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-l-4 border-red-500">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
                핵심 이슈
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                🔒 주문 이력의 불변성 보장을 위한 스냅샷 설계
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                  ⚠️ 문제 상황
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    교사가 준비물을 선택해 매장에 주문을 넣는 구조에서, 일반적인
                    N:M 연결 테이블 (Order - OrderSupply - Supply)을 사용할 경우
                    치명적인 문제를 발견했습니다.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▸</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          데이터 종속성 문제:
                        </strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          주문 완료 후 원본 준비물(TeacherSupply)의 정보가
                          수정되거나 삭제되면, 과거의 주문 내역까지 함께
                          변경되거나 데이터가 유실되는 무결성 문제 발생
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▸</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          복잡한 연관 관계:
                        </strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          해시태그(List&lt;String&gt;)와 같은 컬렉션 데이터는
                          별도 테이블로 관리되므로, 조회 시 조인 비용 증가 및
                          이력 관리 어려움
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                  ✅ 해결 방법
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    주문 시점의 데이터를 영구적으로 보존하기 위해{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      스냅샷(Snapshot) 패턴
                    </strong>
                    과{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      비정규화(Denormalization)
                    </strong>{" "}
                    기법을 적용했습니다.
                  </p>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      📸 스냅샷 엔티티(OrderSupply) 설계
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          단순히 supplyId만 참조하는 것이 아니라,{" "}
                          <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                            supplyName
                          </code>
                          ,{" "}
                          <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                            supplyDescription
                          </code>
                          ,{" "}
                          <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                            supplyImageUrl
                          </code>{" "}
                          등 핵심 데이터를 주문 테이블에 직접 복사하여 저장
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          원본 데이터가 변경되어도 주문 당시의 정보는 안전하게
                          보존
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      🗂️ 데이터 구조 최적화 (Flattening)
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                          •
                        </span>
                        <span>
                          List&lt;String&gt; 형태의 해시태그를 별도 테이블로
                          분리하는 대신, 콤마(,)로 구분된 단일 문자열(
                          <code className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                            supplyHashtagsString
                          </code>
                          )로 변환하여 저장
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                          •
                        </span>
                        <span>
                          주문 내역은 '읽기 전용(Read-only)' 성격이 강하므로,
                          정규화를 통한 쓰기 효율성보다는
                          <strong className="text-purple-600 dark:text-purple-400">
                            {" "}
                            조회 성능과 스키마 단순화
                          </strong>
                          를 우선순위에 둔 설계
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  📊 성과 및 영향
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      데이터 신뢰성 확보
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      상품 정보가 변경되어도 기존 주문서의 내용은 변하지 않음을
                      보장하여, 주문 분쟁 소지를 기술적으로 차단
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                    <div className="text-2xl mb-2">⚡</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      조회 성능 향상
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      복잡한 3~4중 조인 없이 단일 테이블 조회만으로 주문 상세
                      내역(해시태그 포함)을 온전히 불러올 수 있어 쿼리 성능
                      최적화
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Issue - Location Service */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              🌍 외부 API 의존성을 줄인 위치 기반 서비스 구현
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-md font-semibold text-red-600 dark:text-red-400 mb-2">
                  ⚠️ 문제 상황
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  카카오 API에만 의존할 경우 API 장애나 키 만료 시 서비스 전체가
                  중단될 위험이 있었습니다. 또한 API 호출 횟수 제한으로 인해
                  대량의 거리 계산이 필요한 경우 성능 저하가 우려되었습니다.
                </p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
                  ✅ 해결 방법
                </h4>
                <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl space-y-3">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                        ▸
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          Haversine 공식 직접 구현:
                        </strong>
                        <span className="ml-1">
                          지구 구면 거리 계산 알고리즘을 Java로 직접 구현하여
                          외부 API 없이도 거리 계산 가능
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                        ▸
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          주소 정규화(Regex):
                        </strong>
                        <span className="ml-1">
                          다양한 형태의 주소를 표준 형식으로 변환하여 비교
                          정확도 향상
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                        ▸
                      </span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          캐싱(ConcurrentHashMap):
                        </strong>
                        <span className="ml-1">
                          자주 조회되는 거리 계산 결과를 메모리에 저장하여 중복
                          계산 방지
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl">
                <h5 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  📈 결과
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  외부 API 장애 상황에서도 서비스가 정상적으로 작동하며,
                  반복적인 거리 계산 시 캐싱을 통해 응답 속도를 약{" "}
                  <strong className="text-indigo-600 dark:text-indigo-400">
                    99% 이상
                  </strong>{" "}
                  개선했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Third Issue - Multi-role Auth */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              🔐 다중 역할 인증 처리
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              교사, 학생, 매장의 세 가지 역할에 대한 인증 및 권한 관리가
              필요했습니다. 각 역할별로 접근 가능한 API 엔드포인트를 구분하고,
              토큰 기반 인증을 구현해야 했습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Spring Security를 활용하여 역할 기반 접근 제어(RBAC)를 구현하고,
              JWT 토큰에 역할 정보를 포함시켜 효율적으로 관리했습니다.
              <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm ml-1">
                @PreAuthorize
              </code>{" "}
              어노테이션을 활용하여 메서드 레벨에서 권한을 체크합니다.
            </p>
          </div>

          {/* Fourth Issue - Stock Management */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              ⚡ 동시성 제어를 통한 재고 관리
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              여러 학생이 동시에 같은 준비물을 주문할 때 재고 관리에서 동시성
              문제(Race Condition)가 발생했습니다. 재고가 1개 남았을 때 두 명이
              동시에 주문하면 재고가 음수가 되는 상황이 발생할 수 있었습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              JPA의{" "}
              <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                @Lock(LockModeType.PESSIMISTIC_WRITE)
              </code>
              를 사용하여 비관적 락(Pessimistic Lock)을 적용했습니다. 이를 통해
              재고 업데이트 시 데이터 일관성을 보장하고, 재고 부족 상황을
              정확하게 처리할 수 있게 되었습니다.
            </p>
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
            href="/assets/kitget.pdf"
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
            href="https://github.com/Im-uisoon/kitget"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition-all group"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <FaGithub className="text-gray-900 dark:text-white" size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Frontend Repository
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GitHub에서 보기
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Im-uisoon/kitgetback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 transition-all group"
          >
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <FaGithub className="text-gray-900 dark:text-white" size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                Backend Repository
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                GitHub에서 보기
              </p>
            </div>
          </a>
        </div>
      </section>
    </ProjectLayout>
  );
}
