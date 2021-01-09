let values = [1, 60, 34, 30, 20, 5];

let filterLessThan20 = (values) => {
    return values.filter((v) => v < 20);
}
console.log(filterLessThan20(values));
