/* eslint-disable no-plusplus */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-bitwise */

import value from '../../styles/base/theme.scss';

// has number
const hasNumber = number => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = number => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = number => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = count => {
  if (count < 2) return { label: 'Poor', color: value.errorMain };
  if (count < 3) return { label: 'Weak', color: value.warningDark };
  if (count < 4) return { label: 'Normal', color: value.orangeMain };
  if (count < 5) return { label: 'Good', color: value.successMain };
  if (count < 6) return { label: 'Strong', color: value.successDark };
  return { label: 'Poor', color: value.errorMain };
};

// password strength indicator
export const strengthIndicator = number => {
  let strengths = 0;
  if (number.length > 5) strengths += 1;
  if (number.length > 7) strengths += 1;
  if (hasNumber(number)) strengths += 1;
  if (hasSpecial(number)) strengths += 1;
  if (hasMixed(number)) strengths += 1;
  return strengths;
};

let color;
const letters = '0123456789ABCDEF'.split('');
export const AddDigitToColor = limit => {
  color += letters[Math.round(Math.random() * limit)];
};

export const makeRandomColor = () => {
  color = '#';
  AddDigitToColor(5);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    AddDigitToColor(15);
  }
  return color;
};

export const makeRandomDeg = () => Math.random() * 10;

export const truncate = (str, n, useWordBoundary) => {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return `${useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString}...`;
};

export const generateRandomString = length => {
  let result = '';
  const characters = '1234567890';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const fancyTimeFormat = duration => {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? '0' : ''}`;
  }

  ret += `${mins}:${secs < 10 ? '0' : ''}`;
  ret += `${secs}`;
  return ret;
};

export const toSmallUnit = (price, decimal) => {
  return price / 10 ** decimal;
};

export const hideBalance = (price, dcm) => {
  return toSmallUnit(price, dcm).toString().replace(/[0-9]/g, '*');
};

export const truncateWalletAddress = (input = '', n = 10) => {
  if (input.length > n) {
    const sbstr = input.substring(0, n - 1);
    const revSbstr = input
      .split('')
      .reverse()
      .join('')
      .substring(0, n - 2);
    const finalString = `${sbstr} ... ${revSbstr}`;
    return finalString;
  }
  return input;
};

export const toNormalUnit = (price, decimal) => {
  if (typeof price === 'string') {
    parseInt(price, 10);
  }
  return BigInt(price * 10 ** decimal);
};

export const toUsd = (val, fractionalDigit) => {
  return `$${(Math.trunc(val * 10 ** fractionalDigit) / 10 ** fractionalDigit).toFixed(2).toString()}`;
};

export const toRupiah = (val, fractionalDigit) => {
  const toFixedNum = (Math.trunc(val * 10 ** fractionalDigit) / 10 ** fractionalDigit).toFixed();
  let idr = '';
  const angkarev = toFixedNum.toString().split('').reverse().join('');
  for (let i = 0; i < angkarev.length; i++) if (i % 3 === 0) idr += `${angkarev.substr(i, 3)}.`;
  return `Rp. ${idr
    .split('', idr.length - 1)
    .reverse()
    .join('')}`;
};
