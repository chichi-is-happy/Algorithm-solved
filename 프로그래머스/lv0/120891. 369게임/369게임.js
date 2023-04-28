const solution = (order) => {
  let result = 0;
 const orderStr = order.toString();
  orderStr.split("").forEach((el) => {
  if (el === '3' || el === '6' || el === '9') {
    result ++;
  }
  })
  
  return result;
};