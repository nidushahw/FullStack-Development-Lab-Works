function hasNumber(myArr,num){
   return myArr.includes(num);
}

console.log(hasNumber([1,2,3,4,5],3));
console.log(hasNumber([1,1,2,1,1],3));
console.log(hasNumber([],5));