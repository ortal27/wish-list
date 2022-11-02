import React, { useEffect, useState } from "react";
import { Item } from "../../types";
import axios from "axios";
import ItemComponent from "../Item/Item";
import styled from "styled-components";

const ListCotainer = styled.div`
  margin: 4% auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;
const ItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/items").then((res) => setItems(res.data));
  }, []);

  return (
    <ListCotainer>
      {items &&
        items.map((item: Item, i: number) => (
          <ItemComponent
            key={i}
            url={item.url}
            title={item.title}
            price={item.price}
          />
        ))}
    </ListCotainer>
  );
};

export default ItemsList;
