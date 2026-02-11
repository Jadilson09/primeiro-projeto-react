
import './App.css';
import AlunoCard from './assets/components/AlunoCard/AlunoCard';
import alunos from '../public/alunos.json';


import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState('');
  const alunosFiltrados = alunos.filter(aluno =>
    aluno.curso.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        className="input-busca"
        placeholder="Buscar curso..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />
      {alunosFiltrados.map((aluno, index) => (
        <AlunoCard
          key={index}
          nome={aluno.nome}
          idade={aluno.idade}
          curso={aluno.curso}
        />
      ))}
    </>
  );
}

export default App
