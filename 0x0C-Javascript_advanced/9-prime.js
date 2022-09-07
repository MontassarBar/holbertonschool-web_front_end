function countPrimeNumbers() {
    let x = 0;
    for (y = 2; y <= 100; y++) {
        let s = 0;
        for (i = 2; i < y; i++){
            if (y % i == 0) {
                s = 1;
                break;
            }
        }
        if (s == 0) {
            x += 1;
        }
    }
    return x;
}
const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
