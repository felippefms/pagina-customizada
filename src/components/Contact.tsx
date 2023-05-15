import Image from "next/image"
import Link from "next/link";

import AppStoreLogo from "../media/imgs/seloappstore.svg";
import GooglePlayLogo from "../media/imgs/selogoogleplay.svg";
import Faleconoscoico from "../media/imgs/iconefaleconosco.svg"
import Linkedinico from "../media/imgs/linkedinwithcircle.svg";
import Instagramico from "../media/imgs/instagramwithcircle.svg";
import Facebookico from "../media/imgs/facebookwithcircle.svg";
import Youtubeico from "../media/imgs/youtubewithcircle.svg";

function Contact(){
    return(
        <div className="flex flex-col p-4 cursor-default text-[#676767] bg-[#FAFAFA]">
            <div className="mb-8 grayscale">
                <p className="font-bold cursor-default">LOGO</p>
                <p>Tudo que você precisa.</p>
            </div>
            
            <div className="flex flex-col mt-3">
                <p className="text-xl font-semibold grayscale">Baixe o APP</p>
                <div className="flex mb-16 mt-5 space-x-4">
                    <Link href={'https://felippefms.github.io/'} target="_blank">
                        <Image src={AppStoreLogo} alt="App Store"></Image>
                    </Link>
                    <Link href={'https://felippefms.github.io/'} target="_blank">
                        <Image src={GooglePlayLogo} alt="Google Play"></Image>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <p className="text-xl cursor-default font-semibold mb-4">LOGO</p>
                <nav className="flex flex-col mb-12 space-y-4">
                    <Link href={'/'}>Sobre a Loja</Link>
                    <Link href={'/'}>Site de Parceiros</Link>
                    <Link href={'/'}>Quero ser um Parceiro</Link>
                </nav>
            </div>

            <div>
                <div className="flex mb-4">
                    <Image src={Faleconoscoico} alt="Fale Conosco"></Image>
                    <p className="text-xl font-semibold ml-4">Fale Conosco</p>
                </div>
                <Link href="https://mail.google.com/mail/u/0/?fs=1&to=felippefms3@gmail.com.br&tf=cm" target="_blank">felippefms3@gmail.com.br</Link>
                <p className="mt-4">(27) 99905-3721</p>
            </div>

            <div className="mb-6">
                <p className="text-xl font-semibold mt-6 mb-4">Siga nas redes</p>
                <div className="flex space-x-5">
                    <Link href={'https://www.linkedin.com/in/felippefms/'} target="_blank">
                        <Image src={Linkedinico} alt="Linkedin"></Image>
                    </Link>
                    <Link href={'/'} target="_blank">
                        <Image src={Instagramico} alt="Instagram"></Image>
                    </Link>
                    <Link href={'/'} target="_blank">
                        <Image src={Facebookico} alt="Facebook"></Image>
                    </Link>
                    <Link href={'/'} target="_blank">
                        <Image src={Youtubeico} alt="Youtube"></Image>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;