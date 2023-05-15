import Image from "next/image";

import InteractiveBox from "./InteractiveBox";

import Vendasimg from "../media/imgs/vendas.png";
import Freteimg from "../media/imgs/frete.png";
import Entregasimg from "../media/imgs/entregas.png";
import Promocoes from "../media/imgs/promocoes.png";

function Services(){
    return(
        <div className="w-full flex flex-col text items-center pr-4 pb-4 pl-4 pt-24 space-y-8 text-[#333333] bg-white">
            <p className="text-3xl text-center font-bold cursor-default">Alguns de nossos serviços</p>
            <div className="flex flex-col items-center justify-center rounded-[50px] px-8 py-8 bg-[#FAFAFA]">
                <Image src={Vendasimg} alt="Marketplace" className="w-[72px] h-[72px]"></Image>
                <p className="font-bold text-2xl cursor-default pt-10 pb-2">Vendas</p>
                <p className="text-lg cursor-default">Os melhores produtos</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[50px] px-8 py-8 bg-[#FAFAFA]">
                <Image src={Entregasimg} alt="É facil e rápido" className="w-[72px] h-[72px]"></Image>
                <p className="font-bold text-2xl cursor-default pt-10 pb-2">É fácil e rápido</p>
                <p className="text-lg cursor-default">Entregamos em 3 dias</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[50px] px-8 py-8 bg-[#FAFAFA]">
                <Image src={Freteimg} alt="PFrete Grátis" className="w-[72px] h-[72px]"></Image>
                <p className="font-bold text-2xl cursor-default pt-10 pb-2">Frete Grátis</p>
                <p className="text-lg cursor-default">Para todas as regiões</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-[50px] px-8 py-8 bg-[#FAFAFA]">
                <Image src={Promocoes} alt="Vias de impressão" className="w-[72px] h-[72px]"></Image>
                <p className="font-bold text-2xl cursor-default pt-10 pb-2">Preços incríveis</p>
                <p className="text-lg cursor-default">Promoções diárias</p>
            </div>
            <nav>
                <div className="w-full flex flex-col items-center justify-center mt-6 space-y-4">
                    <InteractiveBox></InteractiveBox>
                </div>
            </nav>
        </div>
    )
}

export default Services;