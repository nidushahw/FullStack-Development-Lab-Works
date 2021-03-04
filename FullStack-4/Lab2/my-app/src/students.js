import React from "react";
import Course from "./courses";

let createCourses = count =>{
    let courses =[];

}
const Student = props => {

    return (<p>
        Student <b>{props.name}</b> with student number <b>{props.number} </b><br></br>
        Student is enrolled in <b><Course number={props.enrolled}></Course></b>
         {​​​​​props.enrolled.map(c => <Course key={​​​​​c}​​​​​ number={​​​​​c}​​​​​ />)}​​​​​
    </p>
    );
};

export default Student;


