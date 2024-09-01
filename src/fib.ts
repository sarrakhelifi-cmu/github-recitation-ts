module.exports = function fibonacci(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
};
