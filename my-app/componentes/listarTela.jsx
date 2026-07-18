import { memo } from "react";
import BtnBase from "./btn";
import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";
const MostrarTela = memo(({ elemento, id }) => {
  const hookTarefa = useTarefa();
  return (
    <ul>
      <li>
        {elemento}{" "}
        <BtnBase text={"Deletar"} onClick={() => hookTarefa.onCLickDel(id)} />
      </li>
    </ul>
  );
});
export default MostrarTela;
