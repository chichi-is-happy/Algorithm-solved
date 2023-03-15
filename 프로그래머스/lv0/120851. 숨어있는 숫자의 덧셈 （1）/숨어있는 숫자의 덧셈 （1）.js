const solution = (my_string) => {
  let result = 0;
  for (const char of my_string) {
    if(!isNaN(Number(char))) { // 숫자가 아니면 false
    	result = result + Number(char)
  	}
  }
return result;
}
