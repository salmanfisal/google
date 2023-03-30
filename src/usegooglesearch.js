import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "./keys.js";
const CONTEXT_KEY = "d5bb9cfed867c435b";

function UseGoogleSearch(term) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async()=>{
      await  axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
     .then((res)=>
      res.data)
.then((result)=>{
    setData(result)
    console.log(result)
})
    }
    fetchData();
  },[term])
  return {data};
}


export default UseGoogleSearch;
