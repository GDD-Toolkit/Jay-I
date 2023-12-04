import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import InstructionsBox from '../../components/Instructions/InstructionsBox.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import { theme } from '../../mui.ts';
import { Box, Grid } from '@mui/material';
import InputBox from '../../components/InputBox/InputBox.tsx';
import styles from './Desirability.module.css';
import CustomStepper from '../../components/Stepper/CustomStepper.tsx';

interface DesirabilityProps {
    onNext: () => void;
    onBack: () => void;
  }

const Desirability: React.FC<DesirabilityProps> = ({ onNext, onBack }) => {

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
            <NavBar title="Desirability" />
            <InstructionsBox></InstructionsBox>

            <Box sx={{
                width: '94%',
                marginLeft: "4.2%",
            }}>
                <Grid container rowSpacing={5}>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"What specific need or problem can be addressed?"}
                            header={"2. Identify the opportunity"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Identify The Opportunity"}
                            modalChildren={
                                <div>
                                    <ol type="a">
                                        <li>
                                            Begin by conducting a thorough analysis to identify the needs and concerns of various stakeholders.
                                            Stakeholders may include customers, employees, local communities, and other relevant parties.
                                        </li>
                                        <li>
                                            Engage in open and transparent communication with stakeholders to understand their perspectives,
                                            concerns, and expectations related to the project.
                                        </li>
                                        <li>
                                            Based on the information gathered from stakeholders, formulate an ethical problem statement that clearly
                                            defines the specific need or problem that the project can address.
                                        </li>
                                        <li>
                                            Ensure that the problem is specific, actionable, and aligns with the ethical principles and values, such as
                                            fairness, sustainability, and respect for human rights.
                                        </li>
                                    </ol>
                                </div>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"Who are the project's potential partners and what are their needs?"}
                            header={"2a. Stakeholder Relations"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Stakeholder Relations"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        Start by mapping out all potential stakeholders, including those who could serve as partners or collaborators for your project. 
                                        Stakeholders may include customers, suppliers, industry associations, non-governmental organizations (NGOs), government bodies, 
                                        and more. 
                                    </li>
                                    <li>
                                        Categorize stakeholders based on their potential for partnership and their level of influence on the project. 
                                    </li>
                                    <li>
                                        For each potential partner, conduct a thorough needs assessment to understand their goals, values, and specific requirements. 
                                        This involves open and transparent communication to gather information on what they seek from a partnership. 
                                    </li>
                                    <li>
                                        Analyze how the needs and goals of potential partners align with the objectives and ethical principles of your project. 
                                        Assess if there is a shared purpose and potential for mutually beneficial collaboration. 
                                    </li>
                                    <li>
                                        Establish clear terms and agreements that define the roles, responsibilities, and expectations of each partner. 
                                        Ensure that ethical considerations, such as transparency, fairness, and shared values, are integrated into the partnership agreement. 
                                    </li>
                                </ol>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"What can the project offer?"}
                            header={"2b. Value Proposition"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Value Proposition"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        Begin by analyzing the core strengths and unique attributes of your project or business initiative. 
                                        This analysis should encompass the products, services, or solutions you offer. 
                                    </li>
                                    <li>
                                        Identify specific features, benefits, or values that set your project apart from competitors. 
                                        Consider factors such as quality, price, innovation, and sustainability. 
                                    </li>
                                    <li>
                                        Evaluate how the identified value proposition aligns with ethical principles, standards, 
                                        and the expectations of stakeholders. Assess the ethical implications of what you can offer. 
                                    </li>
                                    <li>
                                        Determine how your value proposition contributes to ethical and societal well-being, considering aspects like 
                                        fairness, environmental impact, and respect for human rights. 
                                    </li>
                                    <li>
                                        Use marketing materials, ethical certifications, and public disclosures to highlight how your project or business 
                                        initiative is committed to delivering value in an ethical and responsible manner.
                                    </li>
                                </ol>
                            }
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox
                            placeholder={"What results and benefits can be created?"}
                            header={"2c. Outcomes"} 
                            setWidth={660}
                            onChange={event => null}
                            setHeight={300}
                            title={"Outcomes"}
                            modalChildren={
                                <ol type="a">
                                    <li>
                                        Begin by clearly identifying and specifying the desired results and benefits that the
                                        project aims to create. These outcomes can be both tangible and intangible.
                                    </li>
                                    <li>
                                        Ensure that these outcomes align with the project's mission, vision, and ethical principles,
                                        considering factors like fairness, sustainability, and social responsibility.
                                    </li>
                                    <li>
                                        Evaluate the potential ethical implications of the identified outcomes. Consider how they may
                                        affect various stakeholders, the environment, and society as a whole.
                                    </li>
                                    <li>
                                        Utilize ethical frameworks or guidlines relevant to your industry or region to asssess the
                                        consequences of the outcomes in terms of ethical principles and values.
                                    </li>
                                    <li>
                                        Regularly communicate the results and benefits to stakeholders, highlighting how they align
                                        with ethical goals and contribute to positive societal impact.
                                    </li>
                                    <li>
                                        Be prepared to make adjustments or improvements based on the ongoing assessment of ethical
                                        outcomes, ensuring a commitment to responsbile and ethical practices.
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

export default Desirability;