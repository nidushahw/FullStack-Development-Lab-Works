let timer;
let counter = 10;

const interval = () => {
    timer = setInterval(every1sec, 1000);
}

const every1sec = () => {
    if(counter === 0){
        console.log("time is up"); 
        clearInterval(timer);
    }else{
        console.log(counter);
        counter--;
    }
    
}
interval();
