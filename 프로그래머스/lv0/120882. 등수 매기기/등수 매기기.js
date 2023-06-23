const solution = (scores) => {
  const averages = scores.map(([e, m]) => (e + m) / 2);
  const sortedScores = [...averages].sort((a, b) => b - a);
  return averages.map((avg) => sortedScores.indexOf(avg) + 1);
}