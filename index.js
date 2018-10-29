/**
 * Takes a value and turns it into a more comprehensive one.
 * @param {number} number
 * @param {number} digits
 */
export default function numericalSuffix(number, digits = 2) {
  if (number < 0) return 0;
  if (number < 100) return number;
  if (number < 1000){
            	  const r = number/100 ;
                const eD = Math.ceil(Math.log(r) / Math.log(10));
  				      const aD = digits < eD ? eD : digits;
  				      const prN = r.toPrecision(aD);
                return prN + 'h';
                }

  const exponentTho = Math.floor(Math.log(number) / Math.log(1000));
  const cleanNum = number / Math.pow(1000, exponentTho);
  const unit = 'kMGTPEZY'.charAt(exponentTho - 1);

  const exponentDec = Math.ceil(Math.log(cleanNum) / Math.log(10));
  const actualDigits = digits < exponentDec ? exponentDec : digits;

  const preciseNum = cleanNum.toPrecision(actualDigits);

  // If true, this is going to render with scientific notation
  // so we will chop the rest and use the suffix
  if (preciseNum.toString().indexOf('e') === -1) {
    return preciseNum.toString().replace(/e\+\d+/, '') + unit;
  }

  return preciseNum + unit;
}
