import React, { useState } from 'react';
import styles from './SelectDropdown.module.css';
import { IconButton, MenuItem } from '@mui/material';
import HelpIcon from "@mui/icons-material/Help";
import { getNames } from 'country-list';
import ModalDialog from '../ModalDialog/ModalDialog.tsx';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';

const BootstrapInput = styled(InputBase)((theme) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    border: '1px solid #ced4da',
    fontSize: "large",
    borderStyle: "none",
  },
}));

interface selectProps {
    header: string;
    title: string;
    modalChildren: React.ReactNode;
    // options: string[]; add later
    // onChange: (event)=>void; add later
}

const SelectDropdown: React.FC<selectProps> = ({ header, title, modalChildren }): React.ReactElement => {
    const [selectedOption, setSelectedOption] = useState("Select a Region");
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
        {/* <select className={styles.inputBox} onChange={(e) => handleOptionChange(e.target.value)}>
          {Object.entries(countryOptions).map(([code, name]) => (
            <option key={code} value={name as string}>
              {name as React.ReactNode}
            </option>
          ))}
        </select> */}
        <Select className={styles.inputBox} value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)} input={<BootstrapInput/>}>
          <MenuItem value="Select a Region">
            <em>Select a region</em>
          </MenuItem>
          {Object.entries(countryOptions).map(([code, name]) => (
              <MenuItem value={name as string}>
                {name as React.ReactNode}
              </MenuItem>
            ))}
        </Select>
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