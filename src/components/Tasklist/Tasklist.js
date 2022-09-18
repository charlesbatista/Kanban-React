import PropTypes from "prop-types";
import "./style.css";
import Taskitem from "../Taskitem/Taskitem";
import iconeAdicionar from "../../img/plus-icon.svg";

export default function Tasklist({
  titulo,
  status,
  tarefas,
  aoAdicionarTarefa,
  aoAtualizarTarefa,
  aoDeletarTarefa,
}) {
  const adicionarTarefa = () => {
    aoAdicionarTarefa("Nova tarefa", status);
  };

  return (
    <div className="tasklist">
      <div className="titulo">{titulo}</div>
      <div className="conteudo">
        {tarefas.map((tarefa) => {
          return (
            <Taskitem
              key={tarefa.id}
              id={tarefa.id}
              titulo={tarefa.titulo}
              status={tarefa.status}
              aoAtualizarTarefa={aoAtualizarTarefa}
              aoDeletarTarefa={aoDeletarTarefa}
            />
          );
        })}
        { tarefas.length === 0 && <div className="empty-list">Nenhuma tarefa adicionada</div> }
        <div className="botoes">
          <button onClick={adicionarTarefa}>
            <img src={iconeAdicionar} alt="Botão para adicionar tarefa" /> Adicionar tarefa
          </button>
        </div>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  titulo: PropTypes.string.isRequired,
  tarefas: PropTypes.array.isRequired,
  status: PropTypes.number.isRequired,
  aoAdicionarTarefa: PropTypes.func.isRequired,
  aoAtualizarTarefa: PropTypes.func.isRequired,
  aoDeletarTarefa: PropTypes.func.isRequired,
};
