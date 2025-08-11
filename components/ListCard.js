import Link from "next/link";

export default function ListCard({ id, genre, title }) {
  return (
    <Link href={`/Dream/${id}`}>
      <div className="flex bg-white rounded-lg p-6 h-[200px] hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col mt-auto">
          <span>{genre}</span>
          <strong className="text-2xl">{title}</strong>
        </div>
      </div>
    </Link>
  );
}
