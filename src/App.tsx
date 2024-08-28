import { Form } from "./components/Form";
import { FaStar } from "react-icons/fa6";

function App() {

  return (
    <div className="bg-slate-50 min-h-screen w-full flex flex-col items-center justify-center gap-2">
      <h1 className="
      text-purple-700
      text-5xl
      "><span className="font-black">INS</span>
      <span className="font-medium ">CRE</span>
      <span className="font-light">VA-SE</span></h1>
      <p>Assine nossa NewsLetter e mantenha-se INFORMADO!</p>
      <div>
        <Form />
      </div>
      <p>Receba as Melhores dicas, Novidades e Ofertas com apenas um clique!</p>
      <FaStar />
    </div>
  )
}

export default App;
