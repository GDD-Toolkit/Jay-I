import { ThemeProvider } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.tsx";
// import CustomStepper from '../../components/Stepper/CustomStepper.tsx';
import { theme } from "../../mui.ts";
import styles from "./Proposal.module.css";

interface ProposalProps {
  onBack: () => void;
  onHome: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onBack, onHome }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleHome = () => {
    setCurrentPage(1);
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
      <NavBar title="Proposal" />

      <Box
        sx={{
          width: "94%",
          marginLeft: "4.2%",
        }}
      >
        <Grid container rowSpacing={5}>
          <Grid item xs={12}>
            <p>Sorry, the proposal cannot be generated at this time!</p>
          </Grid>
        </Grid>
        <div className={styles.buttonsContainer}>
          <button className={styles.backBtn} type="submit" onClick={onBack}>
            Back
          </button>
          <button className={styles.backBtn} type="submit" onClick={onHome}>
            Home
          </button>
        </div>
      </Box>

      {/* <div className={styles.stepper}>
                <CustomStepper currPage={currentPage} onNext={handleNext} />
            </div> */}
    </ThemeProvider>
  );
};

export default Proposal;
