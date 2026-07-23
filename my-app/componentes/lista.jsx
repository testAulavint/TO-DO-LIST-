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
      <div className=" h-full w-full   ">
        <form className="absolute top-[50%] left-[50%] h-60  max-w-[400px]     -translate-x-1/2 -translate-y-1/2 w-3/4 mx-auto border flex flex-col justify-between p-5 gap-7 z-20">
          <input
            className="border p-2"
            type="text"
            value={tarefa}
            placeholder="Titulo da tarefa"
            onChange={hookTarefa.onChange}
          />

          <textarea
            className="border p-2"
            type="text"
            value={tarefa}
            placeholder="Descrição"
            onChange={hookTarefa.onChange}
          />
          <BtnBase onClick={hendleSubmit} text={"Adicionar"} />
        </form>
      </div>
    </>
  );
};

export default Tarefa;
