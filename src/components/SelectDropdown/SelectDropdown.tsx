import React, { useState} from 'react';
import styles from './SelectDropdown.module.css';
import { IconButton } from '@mui/material';
import HelpIcon from "@mui/icons-material/Help";
import {getNames} from 'country-list';
import ModalDialog from '../ModalDialog/ModalDialog.tsx';

interface selectProps {
    header: string;
    title: string;
    modalChildren: React.ReactNode;
    // options: string[]; add later
    // onChange: (event)=>void; add later
}

const SelectDropdown: React.FC<selectProps> = ({ header, title, modalChildren }): React.ReactElement => {
    const [selectedOption, setSelectedOption] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const countryOptions = getNames(); // Get an object of all country names
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
      // Add any other logic for handling selection changes here
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <p className={styles.header}>{header}</p>
          <IconButton onClick={handleOpenModal}>
            <HelpIcon style={{ color: "black", padding: '0px' }} />
          </IconButton>
        </div>
        <select className={styles.inputBox} onChange={(e) => handleOptionChange(e.target.value)}>
          {Object.entries(countryOptions).map(([code, name]) => (
            <option key={code} value={name as string}>
              {name as React.ReactNode}
            </option>
          ))}
        </select>
         {/* Render the ModalDialog conditionally */}
         {openModal && title && modalChildren && (
          <ModalDialog
            title={title}
            children={modalChildren}
            open={openModal}
            handleClose={() => setOpenModal(false)}
          />
        )}
      </div>
    );
  }
export default SelectDropdown;