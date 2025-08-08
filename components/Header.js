import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="inner h-[100px] flex items-center justify-end">
        <nav>
          <ul className="flex gap-16">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/Dream">MENU1</Link>
            </li>
            <li>
              <Link href="/Profile">MENU2</Link>
            </li>
            <li>
              <Link href="/Trpg">MENU3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
