import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { theme } from "../../mui.ts";
import styles from './InputBox.module.css';
import { IconButton } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import ModalDialog from "../ModalDialog/ModalDialog.tsx";

interface inputProps {
  placeholder: string;
  header: string;
  setWidth: number;
  setHeight: number;
  onChange: (event)=>void;
  title: string;
  modalChildren: React.ReactNode;
}

// const ModalDialog = ({ title, children, open, handleClose }: modalProps): React.ReactElement => {

const InputBox = ({placeholder, header, setWidth, setHeight, title, modalChildren, onChange}: inputProps): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false);

   const handleOpenModal = () => {
       setOpenModal(true);
   }

  const containerStyles = {
    border:'black',
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "5px",
    justifyContent: "left",
    paddingLeft: "15px",
    paddingBottom: "20px",
    width: setWidth || "94%",
    height: setHeight || undefined,
    marginRight: "auto",
    marginLeft: 'auto',
  }
  
    return (
      <ThemeProvider theme={theme}>
        <div style={containerStyles}>
            <div className={styles.headerBox}>
              <p className={styles.header}>{header}</p>
              <IconButton onClick={handleOpenModal}> <HelpIcon style={{color: "black", padding: '0px'}}/></IconButton>
            </div>
          <input placeholder={placeholder} className={styles.inputBox}></input>
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
  }
  
  export default InputBox;