import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { theme } from "../../mui.ts";
import styles from "./TextAreaBox.module.css";
import { IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import ModalDialog from "../ModalDialog/ModalDialog.tsx";

interface inputProps {
  placeholder: string;
  header: string;
  setWidth: number;
  setHeight: number;
  onChange: (event) => void;
  title: string;
  modalChildren: React.ReactNode;
  textareaheight: number;
}

const TextAreaBox = ({
  placeholder,
  header,
  setWidth,
  setHeight,
  title,
  modalChildren,
  onChange,
  textareaheight,
}: inputProps): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const containerStyles = {
    border: "black",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "5px",
    justifyContent: "left",
    paddingLeft: "15px",
    paddingBottom: "20px",
    width: setWidth || "94%",
    minHeight: setHeight,
    height: "fit-content",
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "white",
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyles}>
        <div className={styles.headerBox}>
          <p className={styles.header}>{header}</p>
          <IconButton onClick={handleOpenModal}>
            {" "}
            <HelpIcon style={{ color: "black", padding: "0px" }} />
          </IconButton>
        </div>
        <textarea
          placeholder={placeholder}
          className={styles.inputBox}
          rows={textareaheight}
        ></textarea>
      </div>
      {/* Render the ModalDialog conditionally */}
      {openModal && title && modalChildren && (
        <ModalDialog
          title={title}
          children={modalChildren}
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </ThemeProvider>
  );
};

export default TextAreaBox;
