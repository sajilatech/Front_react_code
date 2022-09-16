import Data from './data.json';
import { useState, useEffect } from "react";
function Data(){
    const [isLoading, setIsLoading ] =useState(true)
    const [dataItem, setDataItem] =useState(null)

    useEffect(()=>{
        async function fetchDataItem(){
            const response = await fetch('http://localhost:3000/')
            const dt = await response.json
            setDataItem(dt)
            setIsLoading(false)
        }
        fetchDataItem()
    },[])

    if(isLoading){return<h2>...Loading</h2>}
    return(<div>
        <h3>ID-{dataItem.id}</h3>
        <h3>modelName-{dataItem.modelName}</h3> <h3>bodyType-{dataItem.bodyType}</h3><h3>      "modelType": "plug-in hybrid",
</h3>
        </div>)
      
} export default Data;