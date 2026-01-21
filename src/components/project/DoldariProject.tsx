import ProjectLayout from "./ProjectLayout";
import { FaGithub, FaFilePdf, FaHardHat, FaBell } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot, SiMysql } from "react-icons/si";

const sections = [
  { id: "intro", title: "프로젝트 소개" },
  { id: "background", title: "제작 배경" },
  { id: "tech", title: "기술 스택" },
  { id: "slides", title: "주요 기능" },
  { id: "troubleshooting", title: "트러블슈팅" },
  { id: "resources", title: "자료 다운로드" },
];

export default function DoldariProject() {
  return (
    <ProjectLayout title="돌다리" sections={sections}>
      {/* Intro Section */}
      <section id="intro" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
          프로젝트 소개
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          안전관리 웹 돌다리
        </h2>

        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/assets/doldari.png"
            alt="돌다리 프로젝트"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {" "}
          🎖️ 충청권 ICT SW개발 공모전 우수상 수상작
        </p>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            소규모 공사현장의 안전사고 비율이 대형 현장보다 높지만, 체계적인
            안전교육과 관리 시스템이 부족한 실정입니다. 특히 안전교육 이수율이
            낮고, 사고 발생 시 신속한 대응 체계가 미흡하여 피해가 확대되는
            경우가 많습니다. 이를 해소하고자 프로젝트를 계획했습니다.
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
                    2025.09.27 ~ 2025.10.18 (총 3주)
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
                    4인
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <FaHardHat className="text-yellow-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                안전교육
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                체계적인 온라인
                <br />
                안전교육 제공
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <FaBell className="text-red-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                긴급알림
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                사고 발생 시<br />
                실시간 신고
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <FaHardHat className="text-green-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                현장관리
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                교육 이수자 관리 및<br />
                작업 관리
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 ">
              산재 사망자 비율이 OECD평균보다 높다는 통계청 자료(2024)와,
              안전보건공단 설문조사의 안전교육 부실에 대한 문제가 끊임없이
              발생하고 있습니다. 안전교육을 지원하고, 안전사고 발생 시 현장 모든
              인원에게 알리며 신속대응 할 수 있도록 기능을 제공합니다.
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
                  소규모 공사현장의 낮은 안전교육 이수율 개선
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  안전사고 발생 시 신속한 대응 체계 구축 (SSE 실시간 알림)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  현장 인원 및 안전교육 이력 통합 관리
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  관리자 대시보드를 통한 현장 상황 실시간 모니터링
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              이러한 문제들을 해결하기 위해 JWT 인증 기반의 역할 구분, SSE를
              활용한 실시간 긴급 보고 시스템, 체계적인 온라인 안전교육 관리
              기능을 통합한 종합 안전관리 플랫폼을 개발했습니다.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all">
            <SiNextdotjs
              className="text-black dark:text-white mb-4"
              size={48}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Next.js
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              SEO 최적화된 <br /> 웹 애플리케이션 개발
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
              <div className="p-4 bg-white dark:bg-gray-700/50 rounded-xl">
                <img
                  src="/assets/nhncloudlogo.png"
                  alt="NHN Cloud"
                  className="h-25 object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  NHN Cloud
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  NHN Cloud를 활용하여{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    CI/CD 파이프라인
                  </strong>
                  을 구축했습니다.
                  <br />
                  코드 변경 시 자동으로 빌드 및 배포되어 안정적인 서비스 운영이
                  가능합니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    자동 배포
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    CI/CD 파이프라인
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium">
                    클라우드 인프라
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
              <span className="text-3xl">📚</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  온라인 안전교육 시스템
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  시각 자료, 시험, 수료 인증 등 체계적인 안전교육을 제공합니다.
                  <br />
                  현장 근로자들이 언제 어디서나 안전교육을 자율적으로 이수할 수
                  있습니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>공인 자료기반 안전교육 콘텐츠 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>교육 이수 확인을 위한 시험 시스템</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>수료 여부 및 필수종목 관리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>교육 진행률 및 이수 현황 실시간 추적</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">🚨</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  긴급 알림 시스템
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  안전사고 발생 시 안전관리팀에게 실시간으로 알림을 전송하여
                  신속한 대응과 2차 사고를 예방합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>실시간 푸시 알림 및 GPS 자료 전송</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>사고 유형별 맞춤 대응 매뉴얼 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>긴급 연락처 원터치 다이얼 기능</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">👷</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  현장 인원 관리
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  작업 관리, 팀 관리, 안전교육 이수 현황 등을 통합 관리하여
                  체계적인 현장 운영을 지원합니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>현장 작업 및 팀별 실시간 인원 현황 파악</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>근로자별 안전교육 이수 이력 관리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">
                      •
                    </span>
                    <span>미이수자 자동 알림 및 독려 시스템</span>
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
          {/* Main Issue - Real-time Alert System */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-l-4 border-red-500">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
                핵심 이슈
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                🚨 실시간 알림 시스템 구현 및 안정성 확보
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                  ⚠️ 문제 상황
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    긴급 상황 발생 시 안전관리팀 인원에게 즉시 알림을 전송해야
                    했습니다.
                    <br />
                    특히 공사현장의 특성상 네트워크 환경이 불안정하고, 다양한
                    디바이스에서 알림을 받아야 하는 상황이었습니다.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▸</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          네트워크 불안정성:
                        </strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          공사현장의 열악한 네트워크 환경에서도 안정적인 알림
                          전송 필요
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▸</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          다중 디바이스 지원:
                        </strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          웹, 모바일 앱 등 다양한 채널을 통한 알림 전송 필요
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▸</span>
                      <div>
                        <strong className="text-gray-900 dark:text-white">
                          전송 실패 처리:
                        </strong>
                        <span className="text-gray-600 dark:text-gray-400 ml-1">
                          일부 인원에게 알림이 전달되지 않는 경우의 대응 방안
                          필요
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
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      🔄 다층 알림 시스템 구축
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong>WebSocket:</strong> 실시간 양방향 통신으로
                          즉각적인 알림 전송
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong>Server-Sent Events(SSE):</strong> 인터넷 연결
                          실패 감지 시 재연결 시도
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          •
                        </span>
                        <span>
                          <strong>긴급 신고:</strong> 네트워크 완전 단절 시를
                          고려하여 전화와 앱 푸시알림 전송 방식으로 두 채널 동시
                          사용
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      📊 전송 모니터링 및 재시도 로직
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                          •
                        </span>
                        <span>
                          알림 수신 확인 시스템으로 미수신자 자동 감지
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                          •
                        </span>
                        <span>
                          전송 실패 시 자동 재시도 메커니즘 (최대 3회)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 mt-0.5">
                          •
                        </span>
                        <span>
                          관리자 대시보드에서 실시간 전송 현황 모니터링
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
                    <div className="text-2xl mb-2">⚡</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      알림 전송 속도
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      평균 1초 이내 모든 현장 인원에게 알림 전송 완료
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                    <div className="text-2xl mb-2">✅</div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      전송 성공률
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      다층 알림 시스템으로 안정적인 전송
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Issue - Additional */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              📱 크로스 플랫폼 호환성
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              다양한 디바이스(PC, 모바일, 태블릿)와 브라우저에서 일관된 사용자
              경험을 제공해야 했습니다. 특히 구형 디바이스에서도 원활한 동작이
              필요했습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Next.js의 SSR과 반응형 디자인을 적용하여 모든 디바이스에서
              최적화된 UI를 제공했습니다. 또한 Progressive Web App(PWA) 기술을
              도입하여 앱과 같은 사용자 경험을 제공하면서도 별도의 앱 설치 없이
              웹에서 바로 사용할 수 있도록 했습니다.
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
            href="/assets/doldari.pdf"
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
            href="https://github.com/Im-uisoon/doldari"
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
            href="https://github.com/Im-uisoon/doldariBack"
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
