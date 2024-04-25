// utils/api.js

const API_BASE_URL = 'https://v6.exchangerate-api.com/v6/a164a28b5540ae0a5488f009/latest';

export const fetchCurrencies = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    // Extract currencies from the response data
    const currencies = Object.keys(data.conversion_rates);
    return currencies;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw error; // Throw the error to handle it in the component
  }
};

export const handleConvert = async (sourceCurrency, targetCurrency, amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${sourceCurrency}`);
    const data = await response.json();
    const conversionRate = data.conversion_rates[targetCurrency];
    // Perform the currency conversion
    const convertedAmount = amount * conversionRate;
    return convertedAmount;
  } catch (error) {
    console.error('Error converting currency:', error);
    throw error; // Throw the error to handle it in the component
  }
};

