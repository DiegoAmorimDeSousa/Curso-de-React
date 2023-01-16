import Button from './Button';

function Evento({numero}) {

  function meuEvento() {
    console.log('Opa, fui ativado', numero);
  }

  function segundoEvento() {
    console.log('Ativando o segundo evento');
  }

  return (
    <>
      <p>Clique para disparar um evento:</p> 
      <Button event={meuEvento} text="Primeiro evento" />
      <Button event={segundoEvento} text="Segundo evento" />
    </>
  );
}

export default Evento;