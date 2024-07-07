import Header from "./components/header";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-10 mb-10 ml-[70px]">
        <h1 className="text-white text-5xl">NUESTROS TRABAJOS</h1>

        <img
          src="/images/redline-foto.jpeg"
          alt="gta v image with cars"
          className="h-[400px] w-[1200px] mt-[30px]"
        />

        <Link href="/portfolio" className="mt-10">
          <span className="text-white hover:text-red-500 text-3xl">
            Portfolio
          </span>
        </Link>
        <div className="text-white flex flex-row gap-[80px] mt-[100px]">
          <div><h1>BMW</h1></div>
          <div><h1>MERCEDES</h1></div>
          <div><h1>AUDI</h1></div>
          <div><h1>FIAT</h1></div>
          <div>MCLAREN</div>
        </div>
      </div>
    </>
  );
}
