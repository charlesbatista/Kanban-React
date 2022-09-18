import "the-new-css-reset/css/reset.css"
import './css/App.css'
import Navbar from "./components/Navbar/Navbar"
import Tasklist from "./components/Tasklist/Tasklist"
import { useState } from "react"

let idTarefa = 0;
const gerarId = () => {
  return ++idTarefa;
};

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (titulo, status) => {
    const novaTarefa = {
      id: gerarId(),
      titulo,
      status
    };
    setTarefas((tarefas) => {
      return [...tarefas, novaTarefa];
    });
  };

  const aoAtualizarTarefa = (id, titulo, status) => {
    setTarefas((tarefas) => {
      return tarefas.map((tarefa) => {
        if(tarefa.id === id) {
          return {...tarefa, titulo, status}
        } else {
          return tarefa;
        }
      })
    });
  }

  const aoDeletarTarefa = (id) => {
    setTarefas((tarefas) => {
      return tarefas.filter((t) => t.id !== id);
    });
  }

  return (
    <div className="App">
      <Navbar />
      <div className="boxes">
        <Tasklist
          titulo="A fazer"
          status={1}
          tarefas={tarefas.filter((t) => t.status === 1)}
          aoAdicionarTarefa={adicionarTarefa}
          aoAtualizarTarefa={aoAtualizarTarefa}
          aoDeletarTarefa={aoDeletarTarefa}
        />
        <Tasklist
          titulo="Fazendo"
          status={2}
          tarefas={tarefas.filter((t) => t.status === 2)}
          aoAdicionarTarefa={adicionarTarefa}
          aoAtualizarTarefa={aoAtualizarTarefa}
          aoDeletarTarefa={aoDeletarTarefa}
        />
        <Tasklist
          titulo="Finalizada"
          status={3}
          tarefas={tarefas.filter((t) => t.status === 3)}
          aoAdicionarTarefa={adicionarTarefa}
          aoAtualizarTarefa={aoAtualizarTarefa}
          aoDeletarTarefa={aoDeletarTarefa}
        />
      </div>
    </div>
  );
}

export default App;
