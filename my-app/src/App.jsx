import { memo, useEffect, useState } from "react";
import Tarefa from "../componentes/lista";
import MostrarTela from "../componentes/listarTela";
import { userContext } from "./contex/userContext";
import { useMemo } from "react";

import "./App.css";

function App() {
  const [arrayTarefas, setArrayTarefas] = useState([]);

  const [tarefa, setTarefa] = useState("");

  const hendleSubmit = (e) => {
    event.preventDefault();

    const novaTarefa = {
      id: Date.now,
      nome: tarefa,
    };

    //  console.log("Formulário enviado");

    setArrayTarefas([...arrayTarefas, novaTarefa]);

    // console.log(arrayTarefas);

    setTarefa("");
  };

  return (
    <>
      <userContext.Provider value={{setArrayTarefas, setTarefa }}>
        <div className="">
          <main className="">
            <Tarefa tarefa={tarefa} hendleSubmit={hendleSubmit} />

            {arrayTarefas.map((e) => (
              <MostrarTela key={e.id} elemento={e.nome} id={e.id} />
            ))}
          </main>
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
