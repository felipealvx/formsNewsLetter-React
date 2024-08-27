const Form = () => {
    return <form className="
        bg-slate-50 
        p-5
        rounded-md
        flex
        flex-col
        gap-3
        shadow-xl
    ">
        <div className="flex gap-1 flex-col">
            <label className="w-20">Nome:</label>
            <input type="text" placeholder="Digite Seu Nome"
            className="w-full rounded-sm px-2 py-2 border "/>
        </div>
        <div className="flex gap-1 flex-col">
            <label className="w-20">E-mail:</label>
            <input type="email" name="email" id="email" placeholder="Digite seu melhor e-mail"
            className="w-full rounded-sm px-2 py-2 border"/>
        </div>
        <div className="w-full flex flex-col gap-3">
            <a href="#" className="text-purple-700 underline text-center">Leia os Termos.</a>
            <div className="flex gap-1">
                <input type="checkbox" name="terms" id="terms" 
                className="cursor-pointer"/>
                <label htmlFor="agree">Eu confirmo que li e aceito os termos de uso!</label>
            </div>
        </div>
        <button className="bg-purple-700 rounded-sm text-white font-bold p-2 hover:bg-purple-500 transition-colors duration-300">Cadastrar-se</button>
    </form>
};
export default Form;