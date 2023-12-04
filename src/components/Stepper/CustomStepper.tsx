import React, {useState} from 'react';
import styles from './CustomStepper.module.css';
import { Step, StepLabel, Stepper } from '@mui/material';

interface stepperProps {
    currPage: number;
    onNext: (index: number) => void;
}

const CustomStepper = ({currPage, onNext}: stepperProps): React.ReactElement => {
    const steps = ['1', '2', '3', '4', '5', '6', '7'];

    return (
      <div className={styles.breadcrumb}>
        <Stepper>
          {steps.map((label, index) => (
            <Step key={index}>
              {index === steps.length - 1 ? (
                <StepLabel style={{ color: currPage === index + 1 ? 'green' : 'black' }} onClick={() => onNext(index)}>
                  {/* Empty content for the last step */}
                </StepLabel>
              ) : (
                <StepLabel style={{ color: currPage === index + 1 ? 'green' : 'black' }} onClick={() => onNext(index)}>
                  {'>'}
                </StepLabel>
              )}
            </Step>
          ))}
        </Stepper>
      </div>
    );
  };
export default CustomStepper;