// The entry file of your WebAssembly module.

export function primeFactors(n: i32): i32[] {
  let factors: i32[] = [];
  for (let i: i32 = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}
