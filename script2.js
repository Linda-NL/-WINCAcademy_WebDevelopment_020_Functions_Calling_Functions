// PART 2: VAT CALCULATIONS

// exercise 1

const calculateVAT = function (basePrice, percentageVAT) {
    const amountVAT = basePrice * (percentageVAT / 100);
    return amountVAT;
};

const calculatePriceIncludingVAT = function (basePrice, percentageVAT) {
    const VAT = calculateVAT(basePrice, percentageVAT);
    const priceTotal = basePrice + VAT;
    const priceTotalRounded = Math.round(priceTotal * 100) / 100;
    return priceTotalRounded;
};

console.log(`The price for a pc including VAT is ${calculatePriceIncludingVAT(1000, 21)} euros.`);
console.log(`The price for a loaf of bread including VAT is ${calculatePriceIncludingVAT(1.99, 9)} euros.`);


// exercise 2

const calculateBasePrice = function (totalPrice, percentageVAT) {
    const basePrice = totalPrice / (1 + (percentageVAT / 100));
    return basePrice;
};

const calculateBasePriceAndVAT = function (totalPrice, percentageVAT) {
    const basePrice = calculateBasePrice(totalPrice, percentageVAT);
    const basePriceRounded = Math.round(basePrice * 100) / 100;
    const VAT = totalPrice - basePrice;
    const VATRounded = Math.round(VAT * 100) / 100;
    return [basePriceRounded, VATRounded];
};

let basePriceAndVAT = calculateBasePriceAndVAT(1210, 21);
console.log(`The base price is ${basePriceAndVAT[0]} euros and the amount of VAT is ${basePriceAndVAT[1]} euros.`);

basePriceAndVAT = calculateBasePriceAndVAT(2.17, 9);
console.log(`The base price is ${basePriceAndVAT[0]} euros and the amount of VAT is ${basePriceAndVAT[1]} euros.`);