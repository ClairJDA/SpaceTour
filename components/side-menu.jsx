import Image from "next/image";
import Link from "next/link";

function SideMenu({ setIsOpen }) {
  return (
    <div className="md:hidden h-dvh w-[60%] absolute z-20 top-0 right-0 flex flex-col items-end px-6 py-6 bg-white/5 backdrop-blur-sm">
      <Image
        src={"/images/shared/icon-close.svg"}
        alt="close"
        width={24}
        height={24}
        onClick={() => setIsOpen(false)}
      />
      <ul className="mt-10 self-start flex flex-col gap-4 text-white uppercase">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span className="hidden lg:inline-block font-bold">00</span> Home
        </Link>
        <Link href="/destination" onClick={() => setIsOpen(false)}>
          <span className="hidden lg:inline-block font-bold">01</span>{" "}
          Destination
        </Link>
        <Link href="/crew" onClick={() => setIsOpen(false)}>
          <span className="hidden lg:inline-block font-bold">02</span> Crew
        </Link>
        <Link href="/technology" onClick={() => setIsOpen(false)}>
          <span className="hidden lg:inline-block font-bold">03</span>{" "}
          Technology
        </Link>
      </ul>
    </div>
  );
}

export default SideMenu;
