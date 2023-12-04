import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  DialogProps,
} from "@mui/material";
import React from "react";
import styles from "./ModalDialog.module.css";

interface modalProps {
  title: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

const ModalDialog = ({
  title,
  children,
  open,
  handleClose,
}: modalProps): React.ReactElement => {
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("md");

  return (
    <Dialog maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      <DialogContent className={styles.content}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
