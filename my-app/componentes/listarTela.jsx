import BtnBase from "./btn";
import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";

const MostrarTela = ({ elemento, id, tarefa, funcao }) => {
  const hookTarefa = useTarefa();
  return (
    <ul>
      <li className={tarefa ? "line-through text-gray-700" : ""}>
        <input
          type="checkbox"
          id={`item-${id}`}
          checked={tarefa}
          onChange={() => funcao(id)}
        />
        <label htmlFor={`item-${id}`}>{elemento} </label>
        <BtnBase text={"Deletar"} onClick={() => hookTarefa.onCLickDel(id)} />
      </li>
    </ul>
  );
};
export default MostrarTela;
