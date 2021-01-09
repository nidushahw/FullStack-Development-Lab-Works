const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

let makeUpperCase = (arr) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(arr.map(item => item.toUpperCase()));
        }
        catch (err) {
            reject("Error..Not all items in the array are strings!!")
        }
    });
}

let sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        resolve(arr.sort());
    });
}
makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));


    //second method

    let upper=(arr)=>{
        return new Promise ( (resolve, reject) =>{
          for (let i = 0; i < arr.length; i++) {
              if (typeof arr[i] === 'string') {
                  arr[i] = arr[i].toUpperCase();
              } else {
                reject("Not String")
                return;
              }
          }
          resolve(arr);
        });
      }
      let sort = (arr) => {
        return new Promise((resolve, reject) => {
            resolve(arr.sort());
        });
      
      upper(mixedArray)
      .then(sortWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error));
