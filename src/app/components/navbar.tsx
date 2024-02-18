import Link from "next/link";
function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-violet-700 text-gray-400">
      <Link href={"/"} className="uppercase font-bold h-12 flex items-center">
        <h1>DESAPEGUEI.ME</h1>
      </Link>
    </nav>
  );
}

export default NavBar;
