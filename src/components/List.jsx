import Item from './Item';

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item item="item 1" />
        <Item item="item 2" />
      </ul>
    </>
  );
}

export default List;