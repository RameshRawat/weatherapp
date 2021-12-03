import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

  let curDate=new Date(2021,3,10,19);
  curDate=curDate.getHours();
  let greeting=""; 

  if(curDate>=1 && curDate<12){
    greeting="Good morning";

  }else{
    if(curDate>=12 && curDate<=19){
      greeting="good afternoon";
    }
    else{
      greeting="good night";
    }
  }

ReactDOM.render(
    <>
      <h1>Hello sir,{greeting}</h1>
    </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
