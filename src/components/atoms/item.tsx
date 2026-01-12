const Item = ({ text }: { text: string }) => {
  return (
    <li className="list-group-item">
      <span className="item-span">
        {text}
      </span>
    </li>
  );
};

export default Item;
