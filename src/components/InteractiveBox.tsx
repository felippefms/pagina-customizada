'use client';
import { useState, useEffect } from "react";

function InteractiveBox(){
    const [currentIndex, setCurrentIndex] = useState(0);

    //Função para troca das informações dentro da div
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % 4);
        }, 6000);
        return () => clearInterval(intervalId);
      }, [currentIndex]);

    //Função de relação botão/indice
      const handleClick = (buttonIndex: number) => {
        setCurrentIndex(buttonIndex);
    };

      const divs = [
            <div key={0} className="w-full flex flex-col items-center justify-center space-y-4 animate-fadein">
                <p className="font-bold text-3xl px-14 text-center cursor-default">Tudo que você precisa por R$199/mês</p>
                <p className="px-16 text-center cursor-default">Tenha todos os nossos produtos sem taxa de adesão, sem taxa extra e sem letrinhas miúdas.</p>
            </div>,

            <div key={1} className="w-full flex flex-col items-center justify-center space-y-4 text-blue-600 animate-fadein">
                <p className="font-bold text-3xl px-14 text-center cursor-default">Entregas super rápidas para todo o Brasil!</p>
                <p className="px-16 text-center cursor-default">Fazemos suas entregas de forma ágil, com localizador de pacotes e suporte para a sua segurança.</p>
            </div>,

            <div key={2} className="w-full flex flex-col items-center justify-center space-y-4 text-red-600 animate-fadein">
                <p className="font-bold text-3xl px-14 text-center cursor-default">Segurança e confiabilidade a todo momento</p>
                <p className="px-16 text-center cursor-default">Temos rígidos procedimentos de segurança para garantir sua entrega e perfeito estado dos produtos.</p>
            </div>,

            <div key={3} className="w-full flex flex-col items-center justify-center space-y-4 text-green-600 animate-fadein">
                <p className="font-bold text-3xl px-14 text-center cursor-default">Temos descontos todos os dias da semana!</p>
                <p className="px-16 text-center cursor-default">Confira nossos descontos de até 90% em produtos de diversas áreas, acesse o nosso site.</p>
            </div>
      ]

    return(
        <div className="w-full flex flex-col items-center justify-center space-y-4">
            {divs[currentIndex]}

            <div className="w-full flex flex-row items-center justify-center mt-7">
              <button className={`w-20 h-1 mx-2 mt-4 ${currentIndex === 0 ? 'bg-[#FA641E]' : 'bg-[#EEEEEE]'}`} onClick={() => handleClick(0)} data-index={0}></button>
              <button className={`w-20 h-1 mx-2 mt-4 ${currentIndex === 1 ? 'bg-[#FA641E]' : 'bg-[#EEEEEE]'}`} onClick={() => handleClick(1)} data-index={1}></button>
              <button className={`w-20 h-1 mx-2 mt-4 ${currentIndex === 2 ? 'bg-[#FA641E]' : 'bg-[#EEEEEE]'}`} onClick={() => handleClick(2)} data-index={2}></button>
              <button className={`w-20 h-1 mx-2 mt-4 ${currentIndex === 3 ? 'bg-[#FA641E]' : 'bg-[#EEEEEE]'}`} onClick={() => handleClick(3)} data-index={3}></button>
            </div>
        </div>
    )
}

export default InteractiveBox;