import React from 'react';
import styles from './ConversionResult.module.css';

const ConversionResult = ({ amount }) => {
  return (
    <div className={styles.conversionResultContainer}>
      <h2 className={styles.conversionResultHeader}>Conversion Result</h2>
      <p className={styles.conversionResultAmount}>{amount}</p>
    </div>
  );
};

export default ConversionResult;
