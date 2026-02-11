import './AlunoCard.css'


type AlunoCardProps = {
  nome: string;
  idade: number;
  curso: string;
};


function AlunoCard({ nome, idade, curso }: AlunoCardProps) {
  return (
    <section className="card">
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Curso: {curso}</p>
    </section>
  );
}
export default AlunoCard;