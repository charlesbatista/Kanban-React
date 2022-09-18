import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";

export default function Taskitem({
  id,
  titulo,
  status,
  aoAtualizarTarefa,
  aoDeletarTarefa,
}) {
  const [estaEditando, abrirEditor] = useState(false);
  const [tituloEditavel, definirTitulo] = useState(titulo);

  const aoMudarTitulo = (e) => {
    const novoTitulo = e.target.value;
    definirTitulo(novoTitulo);
    aoAtualizarTarefa(id, titulo, status);
  };

  const aoAtualizarStatus = (e) => {
    aoAtualizarTarefa(id, titulo, parseInt(e.target.value));
  };

  const finalizarEdicao = (e) => {
    if (e.key === "Enter") {
      abrirEditor(false);
      if (tituloEditavel.length === 0) {
        aoDeletarTarefa(id);
      }
    }
  };

  if (estaEditando) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={tituloEditavel}
          onChange={aoMudarTitulo}
          onKeyPress={finalizarEdicao}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => abrirEditor(true)}>{tituloEditavel}</div>
        <select onChange={aoAtualizarStatus} value={status}>
          <option value="1">A fazer</option>
          <option value="2">Fazendo</option>
          <option value="3">Finalizada</option>
        </select>
      </div>
    );
  }
}

Taskitem.propTypes = {
  id: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};
