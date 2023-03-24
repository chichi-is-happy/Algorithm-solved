const solution = (rsp) => {
  let result = "";
  rsp.split("").map(function(el) {
  if (el === "2") {
     result += "0" 
  } else if (el === "0") {
     result += "5"
  }
  else if (el === "5") {
     result += "2"
  }})
  return result;
}
