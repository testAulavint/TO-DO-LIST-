import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";
import BtnBase from "./btn";

const Tarefa = ({ tarefa, hendleSubmit }) => {
  const hookTarefa = useTarefa();
  console.log('formulario renderizado');
  
  return (
    <>
      <form >
        <h1>TO-DO LIST</h1>
        <input
          type="text"
          value={tarefa}
          placeholder="Adicionar tarefa"
          onChange={hookTarefa.onChange}
        />
        <BtnBase onClick={hendleSubmit}  text={'Adicionar'}/>
      </form>
    </>
  );
};

export default Tarefa;
