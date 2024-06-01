import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around bg-black text-white">
      <Link href="/" className="hover:text-red-500">
        Inicio
      </Link>

      <Link href="/servicios" className="hover:text-red-500">
        Servicios
      </Link>
      <img
        src="\images\redline2.png"
        alt="red-line logo"
        className="h-[120px] w-[120px]"
      />
      <Link href="/tienda" className="hover:text-red-600">
        Tienda
      </Link>
      <Link href="/contacto" className="hover:text-red-500">
        Contacto
      </Link>
    </div>
  );
}
