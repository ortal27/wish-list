import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface ModalProps {
  open: boolean;
  close: () => void;
  input: string;
  setInput: (e: any) => void;
  addItem: () => void;
}
const ItemModal = ({ open, close, input, setInput, addItem }: ModalProps) => {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          ADD NEW ITEM
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Insert URL:
        </Typography>
        <input value={input} onChange={(e) => setInput(e)}></input>
        <button onClick={addItem}>Submit</button>
      </Box>
    </Modal>
  );
};

export default ItemModal;
