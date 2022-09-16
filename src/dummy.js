import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';


function HomePage() {

   const [showPosts,setshowPosts]=useState()

   const apiUrl ="https://raw.githubusercontent.com/volvo-cars/god-frontend-code-test/master/public/api/cars.json"

   let displayData
   function pullJson()  {
    fetch (apiUrl)
    .then(response =>response.json())
    .then(responseData => {
      displayData= responseData.map(function(todo){
        return(
          <p key={todo.id}><img width="250px" src={todo.imageUrl} />{todo.modelName}</p>
        )
      })
      console.log(responseData)
      setshowPosts(displayData)
    })
    //return
   }

   useEffect (() =>{
   pullJson()


   },[])

    return <div>
        <Head>
            <title>Next Js</title>
       </Head>
            <main>
              <h1>
              Welcome to Next.js!
              </h1>
            {showPosts}
            </main>
        
        </div>
  }
  
  export default Dummy