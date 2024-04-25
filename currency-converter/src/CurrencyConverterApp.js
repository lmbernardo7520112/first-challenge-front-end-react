import React, { useState, useEffect } from 'react';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import AmountInput from './components/AmountInput/AmountInput';
import ConversionResult from './components/ConversionResult/ConversionResult';
import { fetchCurrencies, handleConvert } from './utils/api';

const CurrencyConverterApp = () => {
  const [currencies, setCurrencies] = useState([]);
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetchCurrencies().then(data => setCurrencies(data)).catch(error => console.error('Error fetching currencies:', error));
  }, []);

  const convertCurrency = async () => {
    try {
      const data = await handleConvert(sourceCurrency, targetCurrency, amount);
      setConvertedAmount(data.convertedAmount);
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencySelector
        label="Select Source Currency"
        currencies={currencies}
        value={sourceCurrency}
        onChange={setSourceCurrency}
      />
      <CurrencySelector
        label="Select Target Currency"
        currencies={currencies}
        value={targetCurrency}
        onChange={setTargetCurrency}
      />
      <AmountInput
        label="Enter Amount"
        value={amount}
        onChange={setAmount}
      />
      <button onClick={convertCurrency}>Convert</button>
      <ConversionResult amount={convertedAmount} />
    </div>
  );
};

export default CurrencyConverterApp;
