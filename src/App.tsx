import './App.css';
import AlunoCard from './assets/components/AlunoCard/AlunoCard';
import alunos from '../public/alunos.json';


import { useState } from 'react';

function removerAcentos(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function App() {
  const [mostrarCC, setMostrarCC] = useState(false);

  const alunosFiltrados = mostrarCC
    ? alunos.filter(aluno => {
        const cursoSemAcento = removerAcentos(aluno.curso.toLowerCase());
        return cursoSemAcento === 'ciencia da computacao';
      })
    : alunos;

  return (
    <div className="container-app">
      <h1 className="titulo-app">{mostrarCC ? 'Alunos de Ciência da Computação' : 'Todos os Alunos'}</h1>
      <button
        className="btn-toggle"
        onClick={() => setMostrarCC(!mostrarCC)}
      >
        {mostrarCC ? 'Mostrar todos os alunos' : 'Mostrar apenas Ciência da Computação'}
      </button>
      <div className="lista-alunos">
        {alunosFiltrados.map((aluno, index) => (
          <AlunoCard
            key={index}
            nome={aluno.nome}
            idade={aluno.idade}
            curso={aluno.curso}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
