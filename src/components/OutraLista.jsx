function OutraLista({ items }) {
  return (
    <>
      <h3>Lista de coisas boas: </h3>
      {
        items.length > 0 ? (items.map(item => {
        return (
          <p key={item}>
            {item}
          </p>
        )
      })) : 'Não há itens na lista'}
    </>
  );
}

export default OutraLista;