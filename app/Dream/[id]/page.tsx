import Header from "../../../components/Header";
import Link from "next/link";

// 장르별 테마 자동 매핑
const getThemeByGenre = (genre: string) => {
  const themes = {
    판타지: {
      primaryColor: "#8B5CF6",
      secondaryColor: "#A78BFA",
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundImage: "/assets/s1.png",
      textColor: "#1F2937",
    },
    SF: {
      primaryColor: "#06B6D4",
      secondaryColor: "#67E8F9",
      backgroundColor: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      backgroundImage: "/assets/s2.png",
      textColor: "#1F2937",
    },
    로맨스: {
      primaryColor: "#EC4899",
      secondaryColor: "#F9A8D4",
      backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      backgroundImage: "/assets/s3.png",
      textColor: "#1F2937",
    },
    스릴러: {
      primaryColor: "#EF4444",
      secondaryColor: "#FCA5A5",
      backgroundColor: "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
      backgroundImage: "/assets/bg.png",
      textColor: "#1F2937",
    },
    액션: {
      primaryColor: "#F59E0B",
      secondaryColor: "#FCD34D",
      backgroundColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      backgroundImage: "/assets/s1.png",
      textColor: "#1F2937",
    },
  };

  return themes[genre as keyof typeof themes] || themes["판타지"];
};

// 예시 데이터 (실제로는 데이터베이스나 API에서 가져올 것)
const dreamData = {
  "1": {
    genre: "판타지",
    title: "마법사의 모험",
    content:
      "신비로운 마법의 세계에서 펼쳐지는 모험 이야기입니다. 어린 마법사가 강력한 마법을 익혀가며 세상을 구하는 여정을 그린 환상적인 이야기입니다.",
    author: "김작가",
    date: "2024-01-15",
  },
  "2": {
    genre: "SF",
    title: "우주 탐험기",
    content:
      "2150년, 인류는 마침내 은하계 너머로 발을 내딛었습니다. 우주선 에터니티호의 승무원들이 미지의 행성에서 발견한 놀라운 비밀과 그들의 모험을 그린 SF 대작입니다.",
    author: "이작가",
    date: "2024-01-10",
  },
  "3": {
    genre: "로맨스",
    title: "운명의 만남",
    content:
      "서로 다른 세계에 살던 두 사람이 우연한 만남을 통해 진정한 사랑을 찾아가는 이야기입니다. 현실과 이상 사이에서 고민하는 현대인들의 로맨스를 섬세하게 그려냈습니다.",
    author: "박작가",
    date: "2024-01-08",
  },
  "4": {
    genre: "스릴러",
    title: "미스터리 사건",
    content:
      "평온했던 작은 마을에서 벌어진 연쇄 실종 사건. 사건을 조사하던 형사가 발견한 충격적인 진실과 그 뒤에 숨겨진 거대한 음모를 파헤치는 긴장감 넘치는 스릴러입니다.",
    author: "최작가",
    date: "2024-01-05",
  },
  "5": {
    genre: "액션",
    title: "영웅의 여정",
    content:
      "세상을 구하기 위해 나선 평범한 청년의 영웅담입니다. 강력한 적들과 맞서 싸우며 성장해나가는 주인공의 모습을 박진감 넘치는 액션과 함께 그려낸 대서사시입니다.",
    author: "정작가",
    date: "2024-01-01",
  },
};

export default function DreamDetail({ params }: { params: { id: string } }) {
  const dream = dreamData[params.id as keyof typeof dreamData];

  // 장르에 따른 테마 자동 적용
  const theme = getThemeByGenre(dream?.genre || "판타지");

  if (!dream) {
    return (
      <div>
        <Header showBackButton={true} backUrl="/Dream" />
        <main className="pt-20 pb-20 inner">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">존재하지 않는 꿈입니다</h1>
            <p className="text-gray-600 mb-8">
              요청하신 꿈을 찾을 수 없습니다.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header showBackButton={true} backUrl="/Dream" />
      </div>
      <main>
        <div className="inner">
          {/* 탑 */}
          <section className="relative bg-amber-400 h-[400px]">
            <div className="absolute flex flex-col items-center gap-4 -bottom-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <strong className="text-6xl font-bold">제목</strong>
              <span>연습용</span>
            </div>
          </section>

          <section className="pt-[120px] pb-[120px]">
            <div className="flex gap-14 mb-15">
              <div>사진</div>
              <div className="flex-1">
                <p className="bg-amber-500 text-center">
                  말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말
                </p>
              </div>
            </div>
            <div className="flex gap-14 flex-row-reverse">
              <div>사진</div>
              <div className="flex-1">
                <p className="bg-amber-500 text-center">
                  말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말말
                </p>
              </div>
            </div>
          </section>

          <section className="bg-amber-600 pt-[120px] pb-[120px]">
            <div className="text-center">캐치프레이즈</div>
          </section>

          {/* 하단 */}
          <section></section>
        </div>
      </main>
    </div>
  );
}
