import PropTypes from 'prop-types';

function Item({ item, lancamento }) {
  return (
    <>
      <li>{item} - {lancamento}</li>
    </>
  );
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
  lancamento: PropTypes.number
}

Item.defaultProps = {
  marca: "Sem marca",
  lancamento: 0
}

export default Item;