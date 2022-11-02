import React from "react";
import { Item } from "../../types";

const ItemComponent = ({ url, title, price }: Item) => {
  return (
    <div>
      <span>{url}</span>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default ItemComponent;
