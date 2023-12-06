import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import InstructionsBox from "../../components/Instructions/InstructionsBox.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";
import { theme } from "../../mui.ts";
import { Box, Grid } from "@mui/material";
import styles from "./Feasibility.module.css";
import TextAreaBox from "../../components/TextAreaBox/TextAreaBox.tsx";
// import CustomStepper from '../../components/Stepper/CustomStepper.tsx';

interface FeasibilityProps {
  onNext: () => void;
  onBack: () => void;
}

const Feasibility: React.FC<FeasibilityProps> = ({ onNext, onBack }) => {
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
      <NavBar title="Feasibility" />
      <InstructionsBox></InstructionsBox>

      <Box
        sx={{
          width: "97%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container rowSpacing={5}>
          <Grid item xs={6}>
            <TextAreaBox
              textareaheight={13}
              placeholder={"What specific need or problem can be addressed?"}
              header={"3. Key Activities"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Key Activities"}
              modalChildren={
                <ol type="a">
                  <li>
                    <b>Identifying Ethical Gaps: </b>Conduct a thorough
                    assessment of the project and its stakeholders by
                    identifying potential ethical gaps or dilemmas within the
                    project's scope.
                  </li>
                  <li>
                    <b>Prioritizing Ethical Concerns: </b>Rank ethical issues by
                    considering the severity of the problem, its impact on
                    stakeholders, and its alignment with the company's values
                    and objectives. Use ethical frameworks or guidelines, such
                    as the UN Global Compact Principles or industry-specific
                    codes of conduct.
                  </li>
                  <li>
                    <b>Developing Actionable Solutions: </b>Work with legal,
                    compliance, and ethics experts to develop actionable
                    solutions for the identified ethical concerns. Establish
                    clear Key Performance Indicators (KPIs) and metrics to
                    measure the effectiveness of these solutions.
                  </li>
                </ol>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextAreaBox
              textareaheight={13}
              placeholder={"Who should we work with to address these problems?"}
              header={"3a. Key Partners"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Key Partners"}
              modalChildren={
                <ol type="a">
                  <li>
                    <b>Stakeholder Mapping: </b>Identify all the stakeholders
                    who are affected by or have an interest in the ethical
                    concerns associated with your project including internal
                    stakeholders (e.g., employees) and external stakeholders
                    (e.g., regulatory bodies, NGOs).
                  </li>
                  <li>
                    <b>Due Diligence: </b>Review past projects, ethical
                    policies, and any ethical public statements of potential
                    partners to identify if they share a similar ethical vision
                    as you for effective collaboration.
                  </li>
                  <li>
                    <b>Collaboration Framework: </b>Establish formal agreements,
                    contracts, or Memoranda of Understanding (MOUs) that outline
                    the roles, responsibilities, and expectations of each
                    partner in addressing the ethical problems. Make sure
                    ethical standards, reporting mechanisms, and
                    dispute-resolution procedures are included in the
                    collaboration framework.
                  </li>
                </ol>
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "25px",
        }}
      >
        <Grid rowSpacing={5}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TextAreaBox
                textareaheight={13}
                placeholder={"How do we communicate to potential partners?"}
                header={"3b. Channels"}
                setWidth={0}
                onChange={(event) => null}
                setHeight={300}
                title={"Channels"}
                modalChildren={
                  <ol type="a">
                    <li>
                      <b>Identify and Group Potential Partners: </b>Segment
                      potential partners based on their nature and role into
                      primary and secondary partners to meet the specific needs
                      and ethical goals of the project.
                    </li>
                    <li>
                      <b>Customized Communication Strategies: </b>Tailor
                      communication strategies for each partner group and
                      facilitate communication using various channels like
                      face-to-face or virtual meetings, formal agreements, and
                      digital media.
                    </li>
                    <li>
                      <b>Continuous Engagement and Feedback: </b>Regularly
                      engage in dialogue using these communication channels to
                      address questions, concerns, and suggestions related to
                      the project's ethical objectives.
                    </li>
                  </ol>
                }
              />
            </Grid>
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

export default Feasibility;
