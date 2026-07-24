import BtnBase from "./btn";
import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";

const MostrarTela = ({ elemento, id, tarefa, funcao, usuario }) => {
  const hookTarefa = useTarefa();

  
  
  return (
    <>


    <h1>
      Tarefas de {usuario?.nome}
    </h1>
      <ul className="p-6">
        <li className={`p-3 rounded-md w-1/2 p-5 border ${
    tarefa ? "line-through text-gray-500 bg-gray-200" : "text-black bg-white"
  }`}>

          <input 
            type="checkbox"
            id={`item-${id}`}
            checked={tarefa}
            onChange={() => funcao(id)}
          />
          <label className="text-amber-900 ml-2" htmlFor={`item-${id}`}>
            {elemento}{" "}
          </label>
          <BtnBase text={"Deletar"} onClick={() => hookTarefa.onCLickDel(id)} />
        </li>
      </ul>
    </>
  );
};
export default MostrarTela;
