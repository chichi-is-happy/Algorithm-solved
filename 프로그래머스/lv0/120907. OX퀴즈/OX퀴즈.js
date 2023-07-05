const solution = (quiz) => {
  const result = [];

  for (const equation of quiz) {
    const [expression, answer] = equation.split('=');
    const [leftOperand, operator, rightOperand] = expression.split(' ');

    const evaluatedAnswer = operator === '+'
      ? parseInt(leftOperand) + parseInt(rightOperand)
      : parseInt(leftOperand) - parseInt(rightOperand);

    if (parseInt(answer) === evaluatedAnswer) {
      result.push('O');
    } else {
      result.push('X');
    }
  }

  return result;
}
