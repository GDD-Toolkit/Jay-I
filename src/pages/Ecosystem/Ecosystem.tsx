import { ThemeProvider } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import InputBox from "../../components/InputBox/InputBox.tsx";
import InstructionsBox from "../../components/Instructions/InstructionsBox.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";
// import CustomStepper from '../../components/Stepper/CustomStepper.tsx';
import { theme } from "../../mui.ts";
import styles from "./Ecosystem.module.css";
import TextAreaBox from "../../components/TextAreaBox/TextAreaBox.tsx";

interface EcosystemProps {
  onNext: () => void;
  onBack: () => void;
}

const Ecosystem: React.FC<EcosystemProps> = ({ onNext, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleChanges = (event: any) => {
    /* Prevent the form from being refreshed to empty */
    event.preventDefault();

    handleNext();
    console.log("handleChanges function triggered");

    /* add functionality for setting fields */
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar title="Ecosystem" />
      <InstructionsBox />
      <Box
        sx={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <TextAreaBox
              textareaheight={24}
              placeholder={"What and who is involved?"}
              header={"Ecosystem"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={500}
              title={"Ecosystem"}
              modalChildren={<p>What and who is involved?</p>}
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
  );
};

export default Ecosystem;
