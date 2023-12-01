import React from 'react';
import styles from './InustructionsBox.module.css';

const InstructionsBox = () => {
    return(
        <div className={styles.instructionBox}>
            <p> 
                <b>Instructions:</b> Click on each box to type and enter the appropriate information inside them. 
                Click (<b>?</b>) to get more specific questions. Press “next” to continue and to save your work.
            </p>
        </div>
    );
};

export default InstructionsBox;
