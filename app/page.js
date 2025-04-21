import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-dvh home-bg">
      <div className="lg:w-[80%] h-full px-10 lg:mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-25 text-center lg:text-left text-white">
        <div className="lg:w-[50%]">
          <p className="text-blue-300 font-barlow-condensed text-xl md:text-3xl uppercase">
            So, you want to travel to
          </p>
          <h1 className="my-5 font-bellefair text-6xl md:text-8xl xl:text-9xl uppercase">Space</h1>
          <p className="text-blue-300 md:text-2xl font-barlow-condensed">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mt-10 flex items-center justify-center text-black font-bellefair md:text-xl lg:text-2xl uppercase bg-white rounded-full">
          <Link href="/destination">Explore</Link>
        </div>
      </div>
    </div>
  );
}
