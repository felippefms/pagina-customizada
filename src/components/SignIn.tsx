import InputTel from "./InputTel";

function SignIn(){
    return(
        <div className="w-full flex flex-col bg-gradient-to-t from-[#FF881F] to-[#FA641E]">
            <div className="w-full flex justify-center my-4">
                <p className="text-4xl font-bold text-center cursor-default text-white">Tudo que você precisa para aproveitar nossos produtos está aqui!</p>
            </div>
            <p className="m-4 cursor-default text-center text-white">Entre em contato conosco e venha conhecer nossos serviços, estamos ansiosos para atender você.</p>
            <div className="flex flex-col m-4 p-4 md:w-auto md:self-center bg-white rounded-3xl">
                <p className="text-3xl font-bold cursor-default">Entrar em contato</p>
                <p className="my-4 cursor-default">Dê o primeiro passo para comprar conosco</p>
                <form className="space-y-4">
                    <div>
                        <p className="font-medium cursor-default">Nome</p>
                        <input type="text" placeholder='Nome Sobrenome' className="w-full rounded-2xl items-center border border-solid pl-4 py-3 border-black"></input>
                    </div>
                    <div>
                        <p className="font-medium cursor-default">E-mail</p>
                        <input type="text" placeholder='contato@email.com' className="w-full rounded-2xl border border-solid pl-4 py-3  border-black"></input>
                    </div>
                    <div>
                        <p className="font-medium cursor-default">Telefone</p>
                        <InputTel></InputTel>
                    </div>
                </form>
                <p className="mb-8 mt-4 cursor-default">Ao continuar, aceito que a loja entre em contato comigo por telefone, e-mail ou WhatsApp.</p>
                <button className="rounded-xl py-3 mx-4 text-white bg-[#FA641E] hover:bg-[#ff8f5c]">Continuar</button>
            </div>
        </div>
    )
}

export default SignIn;