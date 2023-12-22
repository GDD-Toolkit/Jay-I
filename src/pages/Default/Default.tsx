import { ThemeProvider } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import InputBox from "../../components/InputBox/InputBox.tsx";
import InstructionsBox from "../../components/Instructions/InstructionsBox.tsx";
import ModalDialog from "../../components/ModalDialog/ModalDialog.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown.tsx";
// import CustomStepper from "../../components/Stepper/CustomStepper.tsx";
import { theme } from "../../mui.ts";
import styles from "./Default.module.css";
import Ethicality from "../Ethicality/Ethicality.tsx";
import TextAreaBox from "../../components/TextAreaBox/TextAreaBox.tsx";

interface DefaultProps {
  onNext: (index: number) => void;
}

const Default: React.FC<DefaultProps> = ({ onNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [region, setRegion] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = (index: number) => {
    setCurrentPage(index + 1);
    onNext(index + 1); // Notify the parent component about the next page
  };

  const handleChanges = (event: any) => {
    /* Prevent the form from being refreshed to empty */
    event.preventDefault();

    handleNext(currentPage);
    console.log("handleChanges function triggered");

    /* add functionality for setting fields */
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.whole}>
        <NavBar title="General Information" />
        <InstructionsBox />
        <Box
          sx={{
            width: "97%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid container rowSpacing={5}>
            <Grid item xs={6}>
              <InputBox
                placeholder={"Please enter your first name."}
                header={"First Name"}
                setWidth={0}
                onChange={(event) => setFirstName(event.target.value)}
                setHeight={0}
                title={"First Name"}
                modalChildren={
                  <p>
                    Please enter your first name. You may include your middle
                    name.
                  </p>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                placeholder={"Please enter your last name."}
                header={"Last Name"}
                setWidth={0}
                onChange={(e) => setLastName(e.target.value)}
                setHeight={0}
                title={"Last Name"}
                modalChildren={<p>Please enter your last name.</p>}
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                placeholder={"Please enter your role."}
                header={"Role"}
                setWidth={0}
                onChange={(e) => setRole(e.target.value)}
                setHeight={0}
                title={"Role"}
                modalChildren={
                  <div>
                    <div>
                      <p>
                        Please enter the role you are using this tool as. This
                        is used to make your proposal more customized and helps
                        us know who our users are.
                      </p>
                    </div>
                    <div>
                      <p>Examples: Project Manager, Professor, Student, etc.</p>
                    </div>
                  </div>
                }
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                placeholder={"Please enter your affiliation."}
                header={"Affiliation"}
                setWidth={0}
                onChange={(e) => setRole(e.target.value)}
                setHeight={0}
                title={"Affiliation"}
                modalChildren={
                  <div>
                    <div>
                      <p>
                        Please enter the affiliation you are using this tool
                        for. This is used to make your proposal more customized
                        and helps us know who our users are.
                      </p>
                    </div>
                    <div>
                      <p>Example: Monster University.</p>
                    </div>
                  </div>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <SelectDropdown
                header="Region"
                title={"Region"}
                modalChildren={
                  <p>
                    Please click on the dropdown and select the region your
                    project is closesly based in.
                  </p>
                }
              />
            </Grid>
          </Grid>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h1>- OR -</h1>
          </div>

          <div className={styles.btnContainer}>
            <button
              className={styles.btn}
              type="submit"
              onClick={handleChanges}
            >
              Auto-Fill with Log-in
            </button>
            <button
              className={styles.nextBtn}
              type="submit"
              onClick={() => onNext(currentPage)}
            >
              Next
            </button>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Default;
