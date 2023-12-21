import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import InstructionsBox from "../../components/Instructions/InstructionsBox.tsx";
import NavBar from "../../components/NavBar/NavBar.tsx";
import { theme } from "../../mui.ts";
import { Box, Grid } from "@mui/material";
import styles from "./Ethicality.module.css";
import CustomStepper from "../../components/Stepper/CustomStepper.tsx";
import TextAreaBox from "../../components/TextAreaBox/TextAreaBox.tsx";

interface EthicalityProps {
  onNext: () => void;
  onBack: () => void;
}

const Ethicality: React.FC<EthicalityProps> = ({ onNext, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar title="Ethicality" />
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
            <TextAreaBox
              textareaheight={13}
              placeholder={"What issue is at stake?"}
              header={"1. Frame the Problem"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Frame the Problem"}
              modalChildren={
                <div>
                  <h2>What issue is at stake?</h2>
                  <ol type="a">
                    <li>
                      <b>Stakeholder Analysis: </b>Identify the key stakeholders
                      affected by your business. This could include employees,
                      customers, suppliers, the community, shareholders, and
                      regulatory bodies.
                    </li>
                    <li>
                      <b>Impact Assessment: </b>Assess and quantify the
                      potential positive and negative impacts of your business
                      on each stakeholder group. Consider economic, social, and
                      environmental impacts.
                    </li>
                    <li>
                      <b>Ethical Risk Assessment: </b>Analyze the risks
                      associated with your business operations that may lead to
                      ethical dilemmas or violationes.
                    </li>
                    <li>
                      <b>Legal and Regulatory Review: </b>Examine relevant laws,
                      regulations, and industry standards that apply to your
                      business to determine compliance and potential legal
                      risks.
                    </li>
                  </ol>

                  <h2>What do you want to solve?</h2>
                  <ol type="a">
                    <li>
                      <b>Define Ethical Objectives: </b> Clearly articulate the
                      ethical issues or challenges you aim to solve or mitigate.
                      This could include goals related to environmental
                      sustainability, fair labor practices, product safety, or
                      social responsibility.
                    </li>
                    <li>
                      <b>Stakeholder Input: </b> Engage with stakeholders, both
                      internal (employees) and external (customers,
                      communities), to gather their input on what ethical
                      concerns they have and what they would like your business
                      to solve.
                    </li>
                    <li>
                      <b>Benchmarking: </b>Research industry best practices and
                      standards to set benchmarks for ethical performance.
                      Determine where your business currently stands and where
                      you aspire to be.
                    </li>
                    <li>
                      <b>Metric and Key Performance (KPIs): </b>Develop specific
                      metrics and KPIs to track your progress in achieving your
                      ethical objectives. These should be measurable and
                      time-bound.
                    </li>
                  </ol>
                </div>
              }
            />
          </Grid>
          <Grid item xs={6}>
          <TextAreaBox
              textareaheight={13}
              placeholder={"What and who is implicated by the project?"}
              header={"1a. Ethical Deliberation"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Ethical Deliberation"}
              modalChildren={
                <div>
                  <h2>What and who is implcated by the project?</h2>
                  <ol type="a">
                    <li>
                      Conduct an ethical assessment of the project by evaluating
                      the implications of the project on various ethical
                      dimensions such as social, environmental, economic, and
                      cultural aspects.
                    </li>
                    <li>
                      Utilize frameworks or guidlines relevant to your industry
                      or region, like the Universal Declaration of Human Rights,
                      Sustainable Development Goals, or industry-specific codes
                      of conduct.
                    </li>
                    <li>
                      Consider the potential consequences of the project in
                      terms of fairness, sustainability, transparency, and
                      accountability. Determine if there are any trade-offs
                      between ethical principles and stakeholder interests.
                    </li>
                  </ol>
                </div>
              }
            />
          </Grid>
          <Grid item xs={6}>
          <TextAreaBox
              textareaheight={13}
              placeholder={
                "How will it change things? What goal will it accomplish?"
              }
              header={"1b. Societal Impact"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Societal Impact"}
              modalChildren={
                <div>
                  <h2>How will it change things?</h2>
                  <ol type="a">
                    <li>
                      Begin by conducting a thorough analysis of the potential
                      societal impact of the project. Identify both direct and
                      indriect effects on society at large.
                    </li>
                    <li>
                      Consider the various dimensions of societal impact,
                      including economic, environmental, social, and cultural
                      factors.
                    </li>
                    <li>
                      Evaluate how the project may affect different stakeholder
                      groups, such as employees, customers, local communities,
                      and society as a whole. Pay special attention to any
                      vulnerable or marginalized groups that may be
                      disproportionately affected.
                    </li>
                  </ol>

                  <h2>What goal will it accomplish?</h2>
                  <ol type="a">
                    <li>
                      Clearly define the ethical goals and objectives the
                      project aims to achieve. These goals should align with the
                      organization's ethical principles, industry standards, and
                      any relevant laws and regulations.
                    </li>
                    <li>
                      Ensure that these ethical goals are specific, measurable,
                      achievable, relevant, and time-bound (SMART), allowing for
                      clear monitoring and evaluation of progress.
                    </li>
                    <li>
                      Determine how achieving these ethical goals will
                      contribute to positive societal impact, such as promoting
                      social justice, environmental sustainability, or community
                      well-being.
                    </li>
                  </ol>
                </div>
              }
            />
          </Grid>
          <Grid item xs={6}>
          <TextAreaBox
              textareaheight={13}
              placeholder={"What and who is implicated by the project?"}
              header={"1c. Key Impact Indicators"}
              setWidth={0}
              onChange={(event) => null}
              setHeight={300}
              title={"Key Impact Indicators"}
              modalChildren={
                <div>
                  <h2>What and who is implicated by the project?</h2>
                  <ol type="a">
                    <li>
                      Start by identifying all potential stakeholders affected
                      by the project. This includes internal stakeholders (such
                      as employees, shareholders) and external stakeholders
                      (such as customers, local communities, and regulatory
                      bodies).
                    </li>
                    <li>
                      Prioritize stakeholders based on their level of influence
                      and interest in the project. This will help in focusing on
                      the most significant impacts and concerns.
                    </li>
                    <li>
                      Determine the most relevant key impact indicators that
                      will help in assessing the project's implications on
                      different stakeholders and ethical dimensions. These
                      indicators may vary depending on the nature of the project
                      but can include:
                      <ul>
                        <li>
                          Environmental impact indicators (e.g., carbon
                          emissions, resource usage)
                        </li>
                        <li>
                          Social impact indicators (e.g., employee well-being,
                          community engagement)
                        </li>
                        <li>
                          Economic impact indicators (e.g., cost-effectiveness,
                          revenue generation)
                        </li>
                        <li>
                          Ethical impact indicators (e.g., alignment with
                          ethical principles, compliance with ethical standards)
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              }
            />
          </Grid>
        </Grid>
      </Box>
      <div className={styles.buttonsContainer}>
        <button className={styles.backBtn} type="submit" onClick={onBack}>
          Back
        </button>

        <button className={styles.nextBtn} type="submit" onClick={onNext}>
          Next
        </button>
      </div>

      {/* <div className={styles.stepper}>
                <CustomStepper currPage={currentPage} onNext={handleNext} />
            </div> */}
    </ThemeProvider>
  );
};

export default Ethicality;
