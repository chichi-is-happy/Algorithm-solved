const solution = (num_list) => {
  const lastElement = num_list[num_list.length - 1];
  const secondLastElement = num_list[num_list.length - 2];

  if (lastElement > secondLastElement) {
    num_list.push(lastElement - secondLastElement);
  } else {
    num_list.push(lastElement * 2);
  }

  return num_list;
}

