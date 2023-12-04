import { ThemeProvider } from '@emotion/react';
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import InputBox from '../../components/InputBox/InputBox.tsx';
import InstructionsBox from '../../components/Instructions/InstructionsBox.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
// import CustomStepper from '../../components/Stepper/CustomStepper.tsx';
import { theme } from '../../mui.ts';
import styles from './Abstract.module.css';

interface AbstractProps {
    onNext: () => void;
    onBack: () => void;
  }

const Abstract: React.FC<AbstractProps> = ({ onNext, onBack }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleBack= () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }

    const handleChanges = (event: any) => {
        /* Prevent the form from being refreshed to empty */
        event.preventDefault();
    
        handleNext();
        console.log("handleChanges function triggered");
        
        /* add functionality for setting fields */
      };

    return (

        <ThemeProvider theme={theme}>
            <NavBar title="Abstract" />
            <InstructionsBox></InstructionsBox>

            <Box sx={{
          width: '100%',
          marginLeft: "auto",
        }}>
          <Grid container rowSpacing={5}>
                    <Grid item xs={12}>
                        <InputBox
                            placeholder={""}
                            header={"Project Title"} 
                            setWidth={0}
                            onChange={event => null}
                            setHeight={0}
                            title={"Project Title"}
                            modalChildren={"Please enter the title of your project proposal."}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputBox
                            placeholder={""}
                            header={"Abstract"} 
                            setWidth={0}
                            onChange={event => null}
                            setHeight={500}
                            title={"Abstract"}
                            modalChildren={"Please copy and paste OR type in your project abstract."}
                        />
                    </Grid>
                </Grid>
                <div className={styles.buttonsContainer}>
                    <button className={styles.backBtn} type="submit" onClick={onBack}>
                        Back
                    </button>

                    <button className={styles.nextBtn} type="submit" onClick={onNext}>
                        Next
                    </button>
                </div>
            </Box>

            {/* <div className={styles.stepper}>
                <CustomStepper currPage={currentPage} onNext={handleNext} />
            </div> */}

        </ThemeProvider>

    )
};

export default Abstract;