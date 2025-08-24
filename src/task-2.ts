type Currency = "USD" | "EUR" | "GBP";

type ConvertCurrency = {
    amount: number;
    currency: Currency;
};

function convertCurrency({ amount, currency }: ConvertCurrency): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 100, currency: "USD" });
console.log("----------------------");