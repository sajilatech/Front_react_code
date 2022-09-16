
import React,{useState} from "react";
const Home =()=>{
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
                    return (
                    	<div class="scrollwrap">
					<div class="owl-carousel owl-theme">
            <div class="item">
              	<div class="listbox">
					<h4>{data.bodyType}</h4>
                        <h5>{data.modelName} <b>{data.modelType}</b></h5>
                        
                        <img  src={data.imageUrl} alt={data.modelName} height="200px"width="250px"/> 
                    <p>Learn</p>
                     <p>Shop</p>
									</div>
                    </div></div>
					</div>	
				
                )
            }
          ):""
        }
      </div>
    );

}
export default Home;