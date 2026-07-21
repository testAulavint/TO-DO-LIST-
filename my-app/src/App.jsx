import { useState } from "react";
import Tarefa from "../componentes/lista";
import MostrarTela from "../componentes/listarTela";
import Login from "../componentes/login.jsx";
import { userContext } from "./contex/userContext";
import "./App.css";

const filtros = [
  { valor: "todas", nome: "Todas" },
  { valor: "concluidas", nome: "Concluídas" },
  { valor: "pendentes", nome: "Pendentes" },
];

function App() {
  //ONDE FICANM ARMAZENADAS AS TAREFAS CRIADAS
  const [arrayTarefas, setArrayTarefas] = useState([]);

  //O VALOR É ARMAZENADO AQUI DO FILTRO (PEGA O VALOR DE FILTROS)
  const [valorFiltro, setValorFiltro] = useState("todas");

  const [tarefa, setTarefa] = useState("");

  //ALTERA O CONCLUIDO DAS TAREFAS NO INPUT AO CLICAR NO CHECKBOX
  const alternarConclusao = (id) => {
    setArrayTarefas((tarefas) =>
      tarefas.map((item) =>
        item.id === id ? { ...item, concluida: !item.concluida } : item,
      ),
    );
  };

  //o .MAP QUE VAI SER USADO PARA MOSTAR AS TAREFAS NO JANELA COM OS FILTROS ATUALIZADOS DA VARIAVEL (VALORFILTRO)
  const tarefasFiltradas = arrayTarefas.filter((item) => {
    if (valorFiltro === "concluidas") return item.concluida;
    if (valorFiltro === "pendentes") return !item.concluida;
    return true;
  });

  const hendleSubmit = (e) => {
    e.preventDefault();

    if (!tarefa.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      nome: tarefa.trim(),
      concluida: false,
    };

    //  console.log("Formulário enviado");

    setArrayTarefas((tarefas) => [...tarefas, novaTarefa]);
    setTarefa("");
  };

  return (
    <>
      {" "}
      <Login />
      <userContext.Provider value={{ setArrayTarefas, setTarefa }}>
        <div className="hidden">
          <main className="hidden">
            <Tarefa tarefa={tarefa} hendleSubmit={hendleSubmit} />
            {/* mostrar tarefas em tela */}
            {tarefasFiltradas.map((e) => (
              <MostrarTela
                key={e.id}
                tarefa={e.concluida}
                elemento={e.nome}
                id={e.id}
                funcao={alternarConclusao}
              />
            ))}

            {/* filtro */}
            <select
              className=""
              name="filtro"
              id="filtro"
              value={valorFiltro}
              onChange={(e) => setValorFiltro(e.target.value)}
            >
              {filtros.map((item) => (
                <option key={item.valor} value={item.valor}>
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
