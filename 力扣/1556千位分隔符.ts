// 1. 尤雨溪
// const digitsRE = /(\d{3})(?=\d)/g;

// export function currency(value, currency, decimals) {
//   value = parseFloat(value);
//   if (!isFinite(value) || (!value && value !== 0)) return '';
//   currency = currency != null ? currency : '$';
//   decimals = decimals != null ? decimals : 2;
//   var stringified = Math.abs(value).toFixed(decimals);
//   var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
//   var i = _int.length % 3;
//   var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
//   var _float = decimals ? stringified.slice(-1 - decimals) : '';
//   var sign = value < 0 ? '-' : '';
//   return (
//     sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
//   );
// }

// 2. 原生
// function thousandSeparator(n: number): string {
//   return n.toLocaleString().replace(/,/g, '.');
// }

// 3. 官方
function thousandSeparator(n: number): string {
  let res = '';
  let count = 0;

  do {
    let cur = n % 10;
    n = ~~(n / 10);
    res += cur;
    count++;
    if (count % 3 === 0 && n) {
      res += '.';
    }
  } while (n);

  return res.split('').reverse().join('');
}
