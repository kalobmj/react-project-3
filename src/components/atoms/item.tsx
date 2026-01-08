const Item = () => {
  return (
    <li className="list-group-item">
      <span className="item-span">
        {`Task ${Math.floor(Math.random() * 3) + 1}`}
      </span>
    </li>
  );
};

export default Item;
