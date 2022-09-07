console.log("Start of the execution queue");
setTimeout(timeout, 0);
function timeout() {
    console.log("Final code block to be executed");
}
for (let x = 0; x <= 100; x++) {
    console.log(x);
}
console.log("End of the loop printing");
