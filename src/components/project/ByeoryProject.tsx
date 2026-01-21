import ProjectLayout from "./ProjectLayout";
import { FaGithub, FaBook, FaPalette, FaFilePdf } from "react-icons/fa";
import { SiReact, SiSpringboot, SiSupabase, SiMysql } from "react-icons/si";

const sections = [
  { id: "intro", title: "프로젝트 소개" },
  { id: "background", title: "제작 배경" },
  { id: "tech", title: "기술 스택" },
  { id: "slides", title: "주요 기능" },
  { id: "troubleshooting", title: "트러블슈팅" },
  { id: "resources", title: "자료 다운로드" },
];

export default function ByeoryProject() {
  return (
    <ProjectLayout title="벼리" sections={sections}>
      {/* Intro Section */}
      <section id="intro" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
          프로젝트 소개
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          나의 기록 꾸미기, 벼리
        </h2>

        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/assets/byeory.png"
            alt="벼리 프로젝트"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            사용자가 직접 커스터마이징 할 수 있는 대시보드와 포스트 기능을
            제공하는 서비스입니다.
            <br />
            페이지부터 글까지 모두 직접 꾸미고 다이어리를 관리할 수 있는
            목적으로 제작했습니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            할 일, 관심사, 위젯, 기록 등을 위젯으로 추가 및 관리하고,
            커뮤니티에서 사용자가 쓴 글을 교류하며, 기존 다이어리를 제작한 후에
            공유하고 자랑하기 번거롭고 축소된 환경을 확장하는 데에 집중했습니다.
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
                    2026.01.09 ~ 2026.01.31 (총 3주)
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
              <FaBook className="text-blue-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                다이어리
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                일상을 기록하는
                <br />
                디지털 다이어리
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <FaPalette className="text-purple-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                커스터마이징
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                위젯과 테마로
                <br />
                꾸미는 페이지
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <FaBook className="text-green-600 mb-3" size={32} />
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                공유
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                커뮤니티를 통해 작성물을
                <br />
                공유하고 소통
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
              많은 사람들이 일상을 기록하고 싶어 하지만, 기존의 다이어리 앱은
              획일화된 디자인과 제한된 기능으로 개인의 취향을 충분히 반영하기
              어려웠습니다. 또한 단순히 기록만 하는 것이 아니라, 다른 사람들과
              소통하고 공유하며 동기부여를 받을 수 있는 플랫폼이 필요했습니다.
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
                  획일화된 다이어리 앱의 제한적인 커스터마이징 기능
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  개인 기록과 소셜 기능을 결합한 플랫폼의 부재
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  다이어리의 범위를 "일기"에서 종합장으로 확대
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span className="text-gray-600 dark:text-gray-300">
                  다양한 위젯과 테마를 통한 개성 표현의 어려움
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              이러한 문제들을 해결하기 위해 드래그 앤 드롭 기반의 자유로운
              대시보드 커스터마이징, 소셜 로그인과 커뮤니티 기능, 크레딧 기반
              시스템, 다양한 테마와 위젯을 제공하는 종합 개인화 플랫폼을
              개발했습니다.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <SiReact className="text-[#61dafb] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              React
            </h3>
            <p className="text-gray-600 dark:text-gray-400">UI 컴포넌트 개발</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <SiSpringboot className="text-[#6db33f] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Spring Boot
            </h3>
            <p className="text-gray-600 dark:text-gray-400">백엔드 API 서버</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <SiSupabase className="text-[#3ecf8e] mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Supabase
            </h3>
            <p className="text-gray-600 dark:text-gray-400">파일 스토리지</p>
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
              🎨 커스텀 대시보드 및 위젯 시스템
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              드래그 앤 드롭으로 자유롭게 위치를 바꾸고 크기를 조절하며 나만의
              대시보드를 꾸밀 수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>드래그 앤 드롭 기반 위젯 위치 및 크기 조절</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  시계, 할 일 목록, 날씨, 감정 분석, 랜덤 다이어리 등 20종
                  이상의 위젯 제공
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>사용자 위젯 레이아웃 캡처 및 DB 저장 기능</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>커스텀 위젯 생성 및 관리</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🔐 소셜 로그인 및 인증
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              구글, 네이버 OAuth2 소셜 로그인을 지원하며 안전한 인증 체계를
              제공합니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Google, Naver OAuth2 소셜 로그인 지원</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  ProtectedRoute를 통한 비로그인 사용자 페이지 접근 제어
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AuthContext를 활용한 전역 인증 상태 관리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>로그인 상태에 따른 동적 UI 및 기능 제공</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              👥 커뮤니티 및 포스트
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              자신의 대시보드나 일상을 포스트로 작성하여 다른 사용자들과
              공유하고 소통할 수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>대시보드 및 일상 포스트 작성 및 공유</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>댓글 기능을 통한 사용자 간 소통</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>좋아요 기능으로 포스트 반응 표현</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>커뮤니티 피드에서 다른 사용자의 콘텐츠 탐색</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🛒 마켓 및 크레딧 시스템
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              활동에 따라 크레딧을 보상받고, 마켓에서 새로운 위젯과 아이템을
              구매할 수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>활동 기반 크레딧 보상 시스템</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>일일 퀘스트를 통한 추가 크레딧 획득</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>마켓에서 위젯, 테마, 아이템 구매</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>크레딧 기반 경제 시스템으로 사용자 참여 유도</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              🌈 테마 및 스타일링
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              다양한 테마를 선택하여 앱 전체의 디자인을 개인 취향에 맞게 변경할
              수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>ThemeContext를 통한 전역 테마 관리</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>라이트/다크/커스텀 모드를 포함한 다양한 테마 선택</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>사용자별 테마 설정 저장 및 적용</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>일관된 UI/UX를 위한 전역 스타일 시스템</span>
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
          {/* Main Issue - Widget Layout Persistence */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl border-l-4 border-red-500">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
                핵심 이슈
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                📌 대시보드 위젯 위치 영구 저장 시스템 구현
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
                  ⚠️ 문제 상황
                </h4>
                <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    드래그 앤 드롭으로 변경된 위젯의 위치(좌표, 크기) 상태가
                    클라이언트(React)에서만 관리되고, 서버에 즉시 저장되지
                    않았습니다. 사용자가 페이지를 새로고침하면 서버에서 불러온
                    초기 레이아웃 값으로 덮어쓰여져 모든 설정이 초기화되는
                    문제가 발생했습니다.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>
                        새로고침 시 위젯 레이아웃이 초기 상태로 복원됨
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>
                        사용자가 공들여 배치한 위젯 설정이 저장되지 않음
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">▪</span>
                      <span>
                        클라이언트 상태와 서버 데이터 간의 동기화 문제
                      </span>
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
                    위젯 레이아웃 변경 이벤트를 감지하고 그 외에도{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      실시간으로 서버에 동기화
                    </strong>
                    하는 시스템을 구현했습니다.
                  </p>
                  <ul className="space-y-3">
                    <li className="bg-white dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 font-bold mt-1">
                          1.
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-1">
                            이벤트 콜백 구현
                          </strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            onDragStop, onResizeStop 콜백 함수를 사용하여 위젯의
                            이동이나 크기 조절이 끝나는 시점을 감지했습니다.
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
                            API 통신 구현
                          </strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            예를 들어, PIN 보안 서비스에서 틀린 횟수, 초기화
                            코드 등 API 함수를 통해 변경된 레이아웃 정보를
                            백엔드 서버로 즉시 전송하도록 구현했습니다.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-white dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 font-bold mt-1">
                          3.
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-1">
                            데이터베이스 영구 저장
                          </strong>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            서버에서 받은 레이아웃 데이터를 사용자별로
                            데이터베이스에 업데이트하고, 페이지 로드 시 항상
                            최신 레이아웃을 불러오도록 수정했습니다.
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
                      위젯 레이아웃 설정 영구 보존
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/30 p-5 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      실시간
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      레이아웃 변경 즉시 서버 동기화
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-l-4 border-red-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              ⚠️ 문제: 커스텀 배경화면 번쩍거림 현상
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              커스텀 배경화면을 유저 정보에 저장하는 과정에서, 페이지 로드 시
              기본 위젯을 먼저 보여주고 그 후 사용자의 커스텀 위젯으로 바꾸다
              보니 화면이 번쩍거리는 현상이 발생했습니다.
            </p>
            <h4 className="text-md font-semibold text-green-600 dark:text-green-400 mb-2">
              ✅ 해결
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              로컬스토리지를 활용한 하이브리드 캐싱 전략을 도입했습니다.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  사용자의 배경화면 및 위젯 설정을 로컬스토리지에 저장
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  페이지 로드 시 로컬스토리지 데이터를 우선 사용하여 즉시 렌더링
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  로그인 시 또는 변경사항이 있을 때만 서버에서 최신 데이터
                  동기화
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>로컬 캐시와 서버 데이터 간 일관성 유지 로직 구현</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                페이지 로딩 시 번쩍거림 현상 완전 제거, 초기 렌더링 속도 대폭
                개선
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/assets/byeory.pdf"
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
            href="https://github.com/Im-uisoon/byeory"
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
            href="https://github.com/Im-uisoon/byeoryback"
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
