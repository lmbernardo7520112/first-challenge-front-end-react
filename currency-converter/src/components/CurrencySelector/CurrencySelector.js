import React from 'react';
import styles from './CurrencySelector.module.css';

const CurrencySelector = ({ label, currencies, value, onChange }) => {
  return (
    <div className={styles.currencySelectorContainer}>
      <label className={styles.currencySelectorLabel}>{label}</label>
      <select className={styles.currencySelectorSelect} value={value} onChange={(e) => onChange(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code} className={styles.currencyOption}>
            {currency.name} ({currency.code})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
