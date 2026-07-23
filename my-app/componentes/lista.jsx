import { useTarefa } from "../src/hookPersonalizado/adicionarTrefaHook";
import BtnBase from "./btn";

const Tarefa = ({ tarefa, hendleSubmit, getForm }) => {
  const hookTarefa = useTarefa();
  console.log("formulario renderizado");

  return (
    <>
      <div onClick={getForm} className=" fixed inset-0 w-screen h-dvh">
        {" "}
      </div>
      <div className="w-2/3 mx-auto absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2">
        <form className="w-full border grid grid-cols-[1fr_auto] p-5 gap-7 z-20">
          <input
            className="border p-2"
            type="text"
            value={tarefa}
            placeholder="Adicionar tarefa"
            onChange={hookTarefa.onChange}
          />
          <BtnBase onClick={hendleSubmit} text={"Adicionar"} />
        </form>
      </div>
    </>
  );
};

export default Tarefa;
