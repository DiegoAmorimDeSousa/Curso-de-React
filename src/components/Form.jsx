import { useState } from 'react';

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log('Cadastrou usuário');
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input 
          type="text" 
          placeholder="Digite seu nome"
          id="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;