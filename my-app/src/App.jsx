import { useEffect, useState } from "react";
import Tarefa from "../componentes/lista";
import MostrarTela from "../componentes/listarTela";
import { userContext } from "./contex/userContext";
import { useMemo } from "react";

import "./App.css";

function App() {
  const [arrayTarefas, setArrayTarefas] = useState([]);

  const [filtros, setFiltros] = useState([
    { id: 1, nome: "Selecionar Filtro", role: false },
    { id: 2, nome: "Todas", role: false },
    { id: 3, nome: "Concluídas", role: false },
    { id: 4, nome: "Pendêntes", role: false },
  ]);

  const [tarefa, setTarefa] = useState("");
  console.log(filtros);
  const inverterrole = (id) => {
    setFiltros((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            role: !e.role,
          };
        }
        return e;
      }),
    );
  };

  const hendleSubmit = (e) => {
    event.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      nome: tarefa,
    };

    //  console.log("Formulário enviado");

    setArrayTarefas([...arrayTarefas, novaTarefa]); //peguei o array existente e adicionei

    // console.log(arrayTarefas);

    setTarefa("");
  };

  return (
    <>
      <userContext.Provider value={{ setArrayTarefas, setTarefa }}>
        <div className="">
          <main className="">
            <Tarefa tarefa={tarefa} hendleSubmit={hendleSubmit} />
            {/* mostrar tarefas em tela */}
            {arrayTarefas.map((e) => (
              <MostrarTela key={e.id} elemento={e.nome} id={e.id} />
            ))}

            {/* filtro */}
            <select
              name="filtro"
              id="filtro"
              onChange={(e) => inverterrole(Number(e.target.value))}
            >
              {filtros.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </select>
          </main>
        </div>
      </userContext.Provider>
    </>
  );
}

export default App;
