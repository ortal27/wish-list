import React, { useState } from "react";
import axios from "axios";
import { Item } from "../../types.js";
import Button from "@mui/material/Button";
import ItemModal from "../Modals/ItemModal";

const AddItem = () => {
  const [addItem, setAddItem] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [itemsList, setItemsList] = useState<Item[]>([]);

  const addItemHandle = () => {
    axios
      .post("http://localhost:8080/", { input })
      .then((res) => setItemsList(res.data));
    setAddItem(!addItem);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setAddItem(!addItem)}>
        Add New Item +
      </Button>
      {addItem && (
        <ItemModal
          open={addItem}
          close={() => setAddItem(!addItem)}
          input={input}
          setInput={(e) => setInput(e.target.value)}
          addItem={addItemHandle}
        />
      )}
    </div>
  );
};

export default AddItem;
