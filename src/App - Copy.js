import React,{useState} from "react";
import "./App.css";

export default function App() {

  const [data , setData]=useState(null)

 
  fetch("./api/cars.json").then(
    function(res){
    return res.json()
  }).then(function(data){
 
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <div className="App">
      {
       
       data? data.map(
          function(data){
                  return (<div class="scrollwrap" key={data.id}>
                  <div class="owl-carousel owl-theme"><div class="item">
                 <div class="listbox">
                   <h4>SUV</h4> <h5>XC60 Recharge <b>plug in hybrid</b></h5>
      <img className="rounded w-56 h-64 object-cover" src={data.imageUrl} alt={data.modelName} height="200px"width="250px"/></div></div>
                </div>-------------------
                  
              </div>)
          }
        ):""
      }
    </div>
  );
}

