import React from 'react';
import styles from './AmountInput.module.css';

const AmountInput = ({ label, value, onChange }) => {
    return (
      <div className={styles.amountInputContainer}>
        <label className={styles.amountInputLabel}>{label}</label>
        <input className={styles.amountInput} type="number" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  };
  
  export default AmountInput;