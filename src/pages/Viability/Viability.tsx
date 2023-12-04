import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import InstructionsBox from '../../components/Instructions/InstructionsBox.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import { theme } from '../../mui.ts';
import { Box, Grid } from '@mui/material';
import InputBox from '../../components/InputBox/InputBox.tsx';
import styles from './Viability.module.css';
// import CustomStepper from '../../components/Stepper/CustomStepper.tsx';

interface ViabilityProps {
    onNext: () => void;
    onBack: () => void;
  }

const Viability: React.FC<ViabilityProps> = ({ onNext, onBack }) => {

    const [currentPage, setCurrentPage] = useState(1);
  
    const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleBack= () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }
  
    // const handleOpenModal = () => {
    //   setOpenModal(true);
    // }
  
    // const handleCloseModal = () => {
    //   setOpenModal(false);
    // }
  
    const handleChanges = (event: any) => {
      /* Prevent the form from being refreshed to empty */
      event.preventDefault();
  
      handleNext();
      console.log("handleChanges function triggered");
      
      /* add functionality for setting fields */
    };
    
    return (
        <ThemeProvider theme={theme}>
            <NavBar title="Viability" />
            <InstructionsBox></InstructionsBox>

            <Box sx={{
          width: '94%',
          marginLeft: "4.2%",
        }}>
          <Grid container rowSpacing={5}>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"What resources do we have and need?"}
                            header={"4. Key Resources"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Key Resources"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        <b>Resource Inventory Assessment: </b>Conduct a comprehensive inventory of the 
                                        existing resources within the organization including financial resources, human resources, 
                                        and technology. Evaluate if the level of these resources will suffice the project's ethical 
                                        goals.
                                    </li>
                                    <li>
                                        <b>Resource Gap Analysis: </b>Use the evaluation to determine the specific resource needs to 
                                        bridge the resource gap, both in terms of quantity and quality.
                                    </li>
                                    <li>
                                        <b>Resource Aquisition and Allocation: </b>Develop a strategy for acquiring the necessary resources 
                                        including budgeting and recruiting personnel. Establish a clear allocation plan that outlines how the 
                                        acquired resources will be distributed and utilized.
                                    </li>
                                </ol>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"How do we generate income?"}
                            header={"4a. Revenue Streams"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Revenue Streams"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        <b>Ethical Proposition Value: </b>Define the unique ethical value proposition of the project which articulates 
                                        how its products or services contribute to societal or environmental betterment while meeting market demands.
                                    </li>
                                    <li>
                                        <b>Ethical Pricing and Revenue Models: </b>Establish fair and transparent pricing strategies that are both 
                                        competitive and aligned with your ethical goals.
                                    </li>
                                    <li>
                                        <b>Customer Engagement: </b>Develop a transparent, authentic, and ethical marketing strategy that communicates 
                                        your project's values, commitments, and ethical practices. Create opportunities for customers to participate in 
                                        your ethical mission by gaining feedback and insights regarding your ethical initiatives.
                                    </li>
                                </ol>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"What are the costs?"}
                            header={"4b.1 Cost Structure"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Cost Structure"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        <b>Cost Identification: </b>Identify all costs associated with implementing ethical practices and initiatives within 
                                        the project including expenses related to sustainability, fair labor, diversity and inclusion, social responsibility, 
                                        or any other relevant ethical considerations.
                                    </li>
                                    <li>
                                        <b>Cost Categorization: </b>Categorize all costs associated with implementing ethical practices and initiatives within 
                                        the project such as operational costs, compliance costs, and marketing costs.
                                    </li>
                                    <li>
                                        <b>Cost-benefit analysis: </b>Compare the ethical costs with the expected returns, both in financial and non-financial 
                                        terms to evaluate if the ethical investments are justifiable.
                                    </li>
                                </ol>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"How do we cover them?"}
                            header={"4b.2 Cost Structure"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Cost Structure"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        <b>Revenue Generation and Pricing Strategies: </b>Consider revenue generation strategies like offering premium ethical 
                                        products or services or charging a price premium for ethically sourced offerings and pricing models that reflect the added 
                                        value of your ethical practices.
                                    </li>
                                    <li>
                                        <b>Partnership and Collaboration: </b>Explore co-funding initiatives with like-minded organizations and seek out grants or 
                                        subsidies from institutions that focus on supporting projects with strong ethical values.
                                    </li>
                                    <li>
                                        <b>Cost Efficiency and Optimization: </b>Continuously analyze and optimize your cost structure such as streamlining operations, 
                                        implementing cost tracking, and budget management practices to minimize costs to improve efficiency in implementing 
                                        ethical practices.
                                    </li>
                                </ol>
                            }
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

export default Viability;