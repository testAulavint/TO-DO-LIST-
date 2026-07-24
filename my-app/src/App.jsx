import { memo, useState } from "react";
import Tarefa from "../componentes/lista";
import MostrarTela from "../componentes/listarTela";
import Login from "../componentes/login.jsx";
import { userContext } from "./contex/userContext";
import "./App.css";
import Header from "../componentes/header.jsx";
import GridPrincipal from "../componentes/gridPrincipal";

const filtros = [
  { valor: "todas", nome: "Todas" },
  { valor: "concluidas", nome: "Concluídas" },
  { valor: "pendentes", nome: "Pendentes" },
];

function App() {
  const formGet = () => {
    setAtivarForm((prev) => !prev);
  };

  const tarefasGet = () => {
    setAtivarLista((prev) => !prev);

    console.log("passei por aqui");
  };
  //pára ativar a lista das tarefas
  const [ativarLista, setAtivarLista] = useState(false);

  //para ativar o formulariov tarefa
  const [ativarForm, setAtivarForm] = useState(false);

  //PARA VALIDAR O CHECK BOX DO LOGIN
  const [Valido, setValido] = useState(false);

  // PARA PEGAR O EMAIL SALVO NO LOCALSTORAGE E FAZER EM GETITEM
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  const [salvo, setSalvo] = useState("");

  //PARA INVERTER O CAIXA DE CHECKBOX
  const inverter = () => {
    setValido((prev) => !prev);
  };

  //FUNÇÃO QUE VERICA O SUBMIT DO LOGIN PARA VER SE AS INFORMAÇÕES ESTÃO DE ACORDO
  const loginConfirm = (e) => {
    e.preventDefault();

    if (!nome || !email) {
      return alert("Preencher todos os campos");
    }
    if (!Valido) {
      return alert("Concorde com os termos para prosseguir");
    }
    const usuario = {
      nome: nome,
      email: email,
    };

    const string = JSON.stringify(usuario);

    localStorage.setItem("user", string);

    setSalvo(string);

    console.log(string);
  };

  //VERIFICAÇÃO PARA VER SE JÁ TEM UM usuario SALVO NO LOCALSTORAGE
  const ponte = localStorage.getItem("user");
  const converterIn = JSON.parse(ponte);

  const usuarioPrimario = converterIn;
  console.log(usuarioPrimario);

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
      {ponte ? (
        <userContext.Provider
          value={{ setArrayTarefas, setTarefa }}
        >
          <div className="w-full">
            <main className="w-full">
              <h1 className="text-center m-5">Olá, {usuarioPrimario?.nome} </h1>
              <Header setAtivarForm={formGet} setAtivarLista={tarefasGet} />

              {ativarForm && (
                <Tarefa
                  tarefa={tarefa}
                  hendleSubmit={hendleSubmit}
                  getForm={formGet}
                />
              )}
              {/* mostrar tarefas em tela */}

              {ativarLista &&
                tarefasFiltradas.map((e) => (
                  <MostrarTela
                    key={e.id}
                    tarefa={e.concluida}
                    elemento={e.nome}
                    id={e.id}
                    funcao={alternarConclusao}
                    usuario={usuarioPrimario}
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
      ) : (
        <Login
          hendleSubmit={loginConfirm}
          setEmail={setEmail}
          email={email}
          Valido={Valido}
          inverter={inverter}
          nome={nome}
          setNome={setNome}
        />
      )}
    </>
  );
}

export default App;
