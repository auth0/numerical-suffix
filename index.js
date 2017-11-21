/**
 * Takes a value and turns it into a more comprehensive one.
 * @param {number} number 
 * @param {number} digits 
 */
export function numericalSuffix(number, digits = 2) {
  if (number < 0) return 0;
  if (number < 1000) return number;

  const exponentTho = Math.floor(Math.log(number) / Math.log(1000));
  number = number / Math.pow(1000, exponentTho);
  const unit = 'kMGTPE'.charAt(exponentTho - 1);

  const exponentDec = Math.ceil(Math.log(number) / Math.log(10));
  const actualDigits = digits < exponentDec ? exponentDec : digits;

  return number.toPrecision(actualDigits) + unit;
}
