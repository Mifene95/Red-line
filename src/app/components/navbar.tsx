import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-around items-center bg-black text-white text-xl">
        <img
          src="/images/redline-white.png"
          alt="red-line logo"
          className="h-[90px] w-[90px]"
        />
        <Link href="/" className="hover:text-red-500">
          Inicio
        </Link>
        <div className="relative group flex flex-row">
          <div className="hover:text-red-500 flex items-center gap-2 cursor-pointer">
            <span>Servicios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="20px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <div className="hidden group-hover:block absolute top-full bg-black w-[250px] left-1/2 transform -translate-x-1/2 right-1/2">
            <Link
              href="/pintura-y-carroceria"
              className="pb-4 mt-5 hover:text-red-500 flex justify-center items-center"
            >
              Pintura y carroceria
            </Link>
            <Link
              href="/piezas-a-medida"
              className="py-4 hover:text-red-500 flex justify-center items-center"
            >
              Piezas a medida
            </Link>
            <Link
              href="/mecanica"
              className="py-4 hover:text-red-500 flex justify-center items-center"
            >
              Mecanica
            </Link>
          </div>
        </div>
        <Link href="/">
          <img
            src="/images/redline2.png"
            alt="red-line logo"
            className="h-[90px] w-[110px]"
          />
        </Link>
        <Link href="/tienda" className="hover:text-red-600">
          Tienda
        </Link>
        <Link href="/contacto" className="hover:text-red-500">
          Contacto
        </Link>
        <img
          src="/images/redline-white.png"
          alt="red-line logo"
          className="h-[90x] w-[90px]"
        />
      </div>
    </>
  );
}
