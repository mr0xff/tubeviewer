import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";
export default function Home(){
  return(
    <main className="flex flex-col gap-y-3 my-3">
      <img src="/logo.jpg" />

      <div>
        <h2 className="text-6xl font-bold">Humor</h2>
        <p className="text-xl"><span className="font-bold">& ENTRETENIMENTO</span> O CENTRO DE ENTRETENIMENTO E HUMOR
          VOLTADO AOS PAÍSES AFRICANOS DE LÍNGUA OFICIAL PORTUGUESA-
          SA (PALOP) COM A MISSAO DE LEVAR O MELHOR DA NOSSA CRIATIVIDADE 
          ALÉM DE FRONTEIRA, PROMOVENDO CONTEÚDOS AUTÊNTICOS.
        </p>

        <NavLink to="/videos">
          <button className="flex gap-x-3 items-center bg-orange-700 px-4 py-2 rounded-xl text-white text-xl hover:bg-orange-500">Ver Agora <FaArrowRight /></button>
        </NavLink>
      </div>
    </main>
  )
}