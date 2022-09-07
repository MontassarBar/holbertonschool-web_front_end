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
function timeout() {
    for(let i = 0; i < 100; i++){
        countPrimeNumbers();
    }
}
setTimeout(timeout, t1 - t0);
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);