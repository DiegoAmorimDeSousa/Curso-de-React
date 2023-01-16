function Saudacao({nome}) {

  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}`;
  }

  return <p>{gerarSaudacao(nome)}</p>;
}

export default Saudacao;