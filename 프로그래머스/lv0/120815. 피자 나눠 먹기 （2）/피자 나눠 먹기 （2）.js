const solution = (n) => {
  let pizzaNum = 1;
	while(pizzaNum < 100) {
    if ((6 * pizzaNum) % n === 0) {
     return pizzaNum;
     }
    pizzaNum++;
  }
  return pizzaNum;
}