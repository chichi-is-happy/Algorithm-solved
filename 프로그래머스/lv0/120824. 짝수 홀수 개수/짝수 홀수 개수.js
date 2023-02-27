const solution = (num_list) => {
  let arr = [];
  num_list.forEach((ele) => {
      if(ele % 2 === 0) {
    arr.push(ele)   
    }
  })
   return ([arr.length, num_list.length - arr.length])  
}