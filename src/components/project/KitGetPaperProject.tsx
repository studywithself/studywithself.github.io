import ProjectLayout from "./ProjectLayout";
import {
  FaFilePdf,
  FaUniversity,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const sections = [
  { id: "intro", title: "논문 소개" },
  { id: "background", title: "연구 배경" },
  { id: "proposal", title: "제안 시스템" },
  { id: "expected", title: "기대 효과" },
  { id: "resources", title: "자료 다운로드" },
];

export default function KitGetPaperProject() {
  return (
    <ProjectLayout
      title="학교 준비물 구매배송 통합 플랫폼 논문"
      sections={sections}
    >
      {/* Intro Section */}
      <section id="intro" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
          논문 소개
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          학교 준비물 구배·배송 통합 웹 플랫폼
        </h2>

        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/assets/kitgetpaper.png"
            alt="KitGet 논문"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            🎖️ 정보통신학회 2025추계학술대회 우수논문상 수상작
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            본 연구는 학교 준비물의 준비 과정에서 발생하는 문제점을 분석하고, 더
            효율적인 구성을 제안합니다. <br />
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section id="background" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
          연구 배경
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          왜 이 연구가 필요한가?
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <FaUniversity
                className="text-red-600 dark:text-red-400 mt-1"
                size={32}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  교사의 업무 과중
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  준비물 구성 계획, 가정통신문 발송, 구매 확인 등 반복적이고
                  시간 소모적인 업무가 <br />
                  교사에게 과도하게 부여되고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <FaLightbulb
                className="text-yellow-600 dark:text-yellow-400 mt-1"
                size={32}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  준비물 구매과정의 혼동
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  준비물 문의의 어려움, 구매처 찾기의 번거로움, 각기 다른 규격,
                  기한 내 배송 도착의 불확실함 등<br />
                  학부모와 학생들이 겪는 혼란이 큽니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <FaCheckCircle
                className="text-green-600 dark:text-green-400 mt-1"
                size={32}
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  비효율적인 유통 구조
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  온라인 이커머스의 발달로 인해 지역상권의 축소, 등굣길 매장의
                  혼잡, 준비물 구매 누락 등 <br /> 추후 겪게 되는 문제가
                  있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section id="proposal" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
          제안 시스템
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          통합 플랫폼 설계
        </h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            시스템 아키텍처
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                교사
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                준비물 등록 및<br />
                관리 시스템
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                학부모/학생
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                간편한 조회 및<br />
                구매 시스템
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                매장
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                주문 처리 및<br />
                배송 관리
              </p>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              교사는 수업에 필요한 준비물을 플랫폼에서 추천받거나 직접
              등록합니다. 이후 인근 매장을 조회하여 발주를 신청할 수 있습니다.
            </p>
            <br />
            <p>
              매장은 주문을 접수한 뒤, 요청된 준비물을 하나의 키트로 제작하여
              준비합니다.
            </p>
            <p>
              학생은 교사가 등록한 준비물을 확인하고, 픽업 또는 배송 방식 중
              하나를 선택하여 수령합니다.
            </p>
            <br />
            <p>
              이를 통해 매장과 학생은 준비물 현황을 서로 명확히 확인할 수
              있으며,
            </p>
            <p>
              교사는 준비물만 등록해두면 모든 학생이 동일한 규격의 준비물을
              편리하게 준비할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Expected Section */}
      <section id="expected" className="mb-20 scroll-mt-24">
        <div className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4">
          기대 효과
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          예상되는 긍정적 변화
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              교사 업무 경감
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              자동화된 시스템으로 준비물 관리 시간 80% 절감
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              학부모 만족도 향상
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              편리한 구매 시스템으로 학부모 부담 감소
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl border border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              지역상권 매장 매출 증대
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              일괄 주문 증가로 매장 효율성 개선
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              효율적인 준비물 준비
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              정해진 규격으로 준비물간 혼동 및 누락 방지
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
          논문 자료
        </h2>

        <a
          href="/assets/kitgetpaper.pdf"
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
              논문 전문
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PDF 파일 다운로드
            </p>
          </div>
        </a>
      </section>
    </ProjectLayout>
  );
}
