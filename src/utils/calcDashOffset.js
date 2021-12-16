const calcOffset = (percentage) => {
  if (percentage < 0) return 450;
  if (percentage > 100) return 234;
  return 450 - percentage * 2.16;
};

export default calcOffset;
