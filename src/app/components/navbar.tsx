import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-around items-center bg-black text-white text-xl">
        <Link href="/" className="hover:text-red-500">
          Inicio
        </Link>
        <div className="flex flex-row">
          <Link
            href="/servicios"
            className="hover:text-red-500 flex items-center gap-2"
          >
            <span>Servicios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="20px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
        </div>

        <Link href="/">
          <img
            src="/images/redline2.png"
            alt="red-line logo"
            className="h-[120px] w-[120px]"
          />
        </Link>
        <Link href="/tienda" className="hover:text-red-600">
          Tienda
        </Link>
        <Link href="/contacto" className="hover:text-red-500">
          Contacto
        </Link>
      </div>
    </>
  );
}
