import Item from './Item';

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item item="item 1" lancamento={2010} />
        <Item item="item 2" lancamento={2015} />
      </ul>
    </>
  );
}

export default List;