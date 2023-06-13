const solution = (my_string) => {
  let result = 0;
  let arr = (my_string.split(' '))
  while(arr.length > 1) {
   if (arr[0] === '+') {
     result += Number(arr[1])
      arr = arr.slice(1)
 	  }
  else if (arr[0] === '-') {
    result -= Number(arr[1])
     arr = arr.slice(1)
  	}
  else result += Number(arr[0])
  arr = arr.slice(1)
	}
  return result;
}