import Link from "next/link";

function DestinationMenu({ setIndex, index }) {
  return (
    <div className="mb-4 flex justify-center lg:justify-start gap-x-4 lg:gap-x-8 font-barlow-condensed text-lg tracking-widest uppercase">
      <div
        href="/"
        className={`border-b-2 border-transparent ${index === 0 && "border-white" } hover:border-white`}
        onClick={() => setIndex(0)}
      >
        Moon
      </div>
      <div
        href="/"
        className={`border-b-2 border-transparent ${index === 1 && "border-white" } hover:border-white`}
        onClick={() => setIndex(1)}
      >
        Mars
      </div>
      <div
        href="/"
        className={`border-b-2 border-transparent ${index === 2 && "border-white" } hover:border-white`}
        onClick={() => setIndex(2)}
      >
        Europa
      </div>
      <div
        href="/"
        className={`border-b-2 border-transparent ${index === 3 && "border-white" } hover:border-white`}
        onClick={() => setIndex(3)}
      >
        Titan
      </div>
    </div>
  );
}

export default DestinationMenu;
