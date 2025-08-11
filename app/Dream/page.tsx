import Header from "../../components/Header";
import ListCard from "../../components/ListCard";

export default function Dream() {
  return (
    <div>
      <Header showBackButton={false} backUrl="/" />
      <main>
        <div className="pt-20 pb-20 inner grid grid-cols-2 gap-4">
          <ListCard id="1" genre="장르명" title="카드 제목" />
          <ListCard id="2" genre="장르명" title="카드 제목" />
          <ListCard id="3" genre="장르명" title="카드 제목" />
          <ListCard id="4" genre="장르명" title="카드 제목" />
          <ListCard id="5" genre="장르명" title="카드 제목" />
        </div>
      </main>
    </div>
  );
}
