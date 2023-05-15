import Link from "next/link";

function Footer(){
    return(
        <footer className="pt-4 mb-0 bg-[#FAFAFA] text-[#676767]">
            <div className="flex justify-center">
                <hr className="w-full mx-8 border-[#6b6b6b]"></hr>
            </div>
            <nav className="m-4 space-x-4">
                <Link href={'/'}>Nossos Termos</Link>
                <Link href={'/'}>Privacidade</Link>
                <Link href={'/'}>Ajuda</Link>
            </nav>

            <div className="flex mt-6 ml-4 mb-6 mr-4">
                <p className="text-xs mr-4 cursor-default">© Copyright • Felipe Madureira de Souza • Todos os direitos reservados.</p>
                <p className="font-bold cursor-default">LOGO</p>
            </div>

            <div className="w-full h-2 bg-[#FF671F]"></div>
        </footer>
    )
}

export default Footer;