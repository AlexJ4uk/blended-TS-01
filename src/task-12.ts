function sendDoneStatus(callback: (status: string) => void): void {
    callback("done");
}
sendDoneStatus((status) => {
    console.log(`Status: ${status}`);
});
console.log("----------------------");