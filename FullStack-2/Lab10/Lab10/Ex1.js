let MyArray = [];
function appendMyArray(arr, x) {
    try {
        arr.push(x);
        console.log("exiting..MyArray " + arr);
    } catch (err) {
        console.log(err.message);
        console.log("exiting..MyArray " + arr);
    }
}
appendMyArray([3,4], 5);
appendMyArray("xyz", 100);
appendMyArray({"make" : "Tesla", model: "s"}, 5);