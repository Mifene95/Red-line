import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-row justify-around bg-black text-white">
            <Link href="/" className='hover:text-red-500'>
            Inicio
        </Link>
            <Link href="/portfolio" className='hover:text-red-500'>
                Portfolio
            </Link>
            <Link href="/services" className='hover:text-red-500'>
                Servicios
            </Link>
            <img src="" alt="red-line logo" className="h-8 w-8" />
            <Link href="/store" className='hover:text-red-600'>
                Tienda
            </Link>
            <Link href="/contact" className='hover:text-red-500'>
                Contacto
            </Link>
        </div>
    );
}
