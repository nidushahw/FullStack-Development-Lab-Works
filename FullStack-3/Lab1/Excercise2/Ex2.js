let moment = require("moment");

 let getCurrentDate = ()=>{
     let wrapped = moment(new Date());
     //console.log(wrapped);
    let date = moment(new Date()).format('dddd,MMMM Do YYYY, h:mm:ss a');
      console.log(date);
 }

 getCurrentDate();