import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './App.css';

  let curDate=new Date();
  curDate=curDate.getHours();
  let greeting=""; 
  const cssStyle={};

  if(curDate>=1 && curDate<12){
    greeting="Good morning";
    cssStyle.color="green";

  }else{
    if(curDate>=12 && curDate<=19){
      greeting="Good afternoon";
      cssStyle.color="red";
    }
    else{
      greeting="Good night";
      cssStyle.color="black";
    }
  }
  
    const currDate=new Date().toDateString();
    const currTime=new Date().toLocaleTimeString();
  
  

ReactDOM.render(
    <>
    <h1>Hello sir,</h1><span style={cssStyle}>{greeting} <h3>{currDate}and {currTime}</h3></span>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
