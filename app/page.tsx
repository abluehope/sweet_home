import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import profile from "../public/assets/profile_img.png";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="inner flex gap-6">
          <div className="box w-[486px] h-[auto]">왕 큰 이미지</div>
          <div className="flex-1 flex flex-col gap-6">
            {/* 상단 */}
            <div className="flex gap-6">
              <div className="box basis-sm flex flex-col items-center justify-center h-[364px]">
                <Image src={profile} alt="profile" className="mb-6" />
                <strong className="mb-2 text-2xl font-bold">NAME</strong>
                <p className="text-sm text-center">
                  안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                </p>
              </div>
              <div className="mt-auto flex-1">
                <span className="text-white font-bold text-6xl">PM 02:08</span>
              </div>
            </div>
            {/* 하단 */}
            <div>
              <div className="box h-[364px] overflow-y-auto">
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
                <p>스크롤바 생길까요</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-[100px]">
        <div className="inner">
          <p>COPYRIGHT 2025. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
