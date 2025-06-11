function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  const exchangeRates = {
    USD: { INR: 83, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.09, INR: 90.5 }
  };

  if (from === to) {
    document.getElementById("result").textContent = `Converted Amount: ${amount}`;
  } else {
    const rate = exchangeRates[from][to];
    const result = amount * rate;
    document.getElementById("result").textContent = `Converted Amount: ${result.toFixed(2)} ${to}`;
  }
}
