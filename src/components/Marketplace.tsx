import Image from "next/image";

import Phonesimg from "../media/imgs/phonesimg.png";
import Whatsappico from "../media/imgs/whatsappico.svg";

function Marketplace(){
    return(
        <div className="w-full flex flex-col text items-center p-4 cursor-default text-[#333333] bg-white">
            <p className="font-bold text-3xl pb-10">Nossa Loja Online</p>
            <div className="flex flex-col space-y-10 pt-10 px-10 rounded-[50px] md:items-center bg-gradient-to-t from-[#FF881F] to-[#FA641E]">
                <p className="text-white text-center">Além de comprar nossos produtos de forma presencial, nossa loja online te dá todo o conforto para comprar e receber seu produto sem sair de casa. Entre em contato e peça já o seu!</p>
                <Image src={Phonesimg} alt="Imagem Marketplace" className="md:w-[300px]"></Image>
            </div>
            <div className="flex flex-col mt-16 mb-6 px-16 text-center space-y-4 cursor-default">
                <p className="font-bold text-3xl">E mais: suporte que realmente funciona!</p>
                <p>Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você quando precisar.</p>
            </div>

            <div className="flex flex-col w-full p-10 mx-4 mb-6 md:items-center bg-[#FAFAFA] rounded-[50px]">
                <div className="mb-6">
                    <p className="text-3xl font-bold pb-2 text-[#333333]">Nossos Serviços</p>
                    <p className="text-l font-medium text-[#666666]">Tudo o que você precisa</p>
                </div>

                <div>
                    <ul className="space-y-1 pb-8">
                        <li>Venda de produtos</li>
                        <li>Entrega rápida</li>
                        <li>Suporte 24 Horas</li>
                        <li>Segurança para seu produto</li>
                        <li>Frete grátis para todo o Brasil</li>
                    </ul>
                </div>

                <div className="w-fit p-4 mb-4 rounded-full bg-white">
                    <p className="text-xl font-bold">R$199/mês</p>
                </div>
                <div className="w-full text-center rounded-full md:w-fit bg-gradient-to-r from-[#FF881F] to-[#FA641E] shadow-md shadow-orange-600">
                    <button className="w-full h-full p-4 font-medium text-white">Comprar agora</button>
                </div>
            </div>

            <div className="flex flex-col w-full p-10 mx-4 md:items-center bg-[#FAFAFA] rounded-[50px]">
                <div className="mb-6">
                    <p className="text-3xl font-bold pb-2 text-[#333333]">Pagamento On-line</p>
                    <p className="text-l font-medium text-[#666666]">Segurança e agilidade</p>
                </div>
                <div>
                    <ul className="space-y-1 pb-8">
                        <li>Aceitamos Pix e Cartão de Crédito</li>
                        <li>Confirmação do pagamento</li>
                        <li>Faça de dentro de casa</li>
                        <li>Segurança para os seus pagamentos</li>
                        <li>Agilidade para entregar</li>
                    </ul>
                </div>
                <div className="w-fit p-4 mb-4 rounded-full bg-white">
                    <p className="text-xl font-bold">2,99% por transação</p>
                </div>
                <div className="w-full text-center rounded-full md:w-fit bg-gradient-to-r from-[#FF881F] to-[#FA641E] shadow-md shadow-orange-600">
                    <button className="w-full h-full p-4 font-medium text-white">Saiba mais</button>
                </div>
            </div>

            <div className="flex flex-row my-10 items-center font-semibold">
                <p className="mr-7">Fale conosco</p>
                <Image src={Whatsappico} alt="Whatsapp:" className="mr-2"></Image>
                <p className="text-xs mr-1">27</p>
                <p>99905-3721</p>
            </div>
        </div>
    )
}

export default Marketplace;