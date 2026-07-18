import { useContext } from "react";
import { userContext } from "../contex/userContext";

export const useTarefa = () => {
  // console.log('useTarefa renderizado');

  const { setArrayTarefas, setTarefa } = useContext(userContext);

  const onChange = (event) => setTarefa(event.target.value);

  const onCLickDel = (id) => {
    setArrayTarefas((itens) => itens.filter((e) => e.id !== id));
  };
  return {
    onChange,
    onCLickDel,
  };
};
