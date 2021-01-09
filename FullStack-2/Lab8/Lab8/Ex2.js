function getKeyValuePairs(object) {
    let keyArr = [];
    let valueArr = [];

    for (let key in object) {
        keyArr.push(key);
        valueArr.push(object[key]);
    }
    console.log(keyArr);
    console.log(valueArr);
}

getKeyValuePairs({ a: 5, b: 10, c: 16 });
getKeyValuePairs({ r: "React", a: "Angular", v: "Vue"});
getKeyValuePairs({ k1: true, k2: false, k3: undefined});

