import BtnBase from "./btn";
import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";
import { useState } from "react";

const MostrarTela = ({ elemento, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const hendleCheckboxChecked = (event) => {
    setIsChecked(event.target.checked);
  };
  const hookTarefa = useTarefa();
  return (
    <ul>
      <li className={isChecked ? "line-through text-gray-700" : ""}>
        <input
          type="checkbox"
          id="item"
          checked={isChecked}
          onChange={hendleCheckboxChecked}
        />
        <label htmlFor="item">{elemento} </label>
        <BtnBase text={"Deletar"} onClick={() => hookTarefa.onCLickDel(id)} />
      </li>
    </ul>
  );
};
export default MostrarTela;
