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
          className="h-[300px] w-[800px]"
        />

        <Link href="/" className="mt-10">
          <span className="text-white hover:text-red-500 text-3xl">
            Portfolio
          </span>
        </Link>
      </div>
    </>
  );
}
