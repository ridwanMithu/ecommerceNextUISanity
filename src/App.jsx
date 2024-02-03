import { useEffect, useState } from 'react'
import './App.css'
import { client } from './Config/SanityConfig';


function App() {
  const[category,setCategory]=useState([]);
  let query=`*[_type == "allproducts"]`;
  const getCategory =async()=>{
    const category=await client.fetch(query);
    setCategory(category);
  }
  useEffect (() => {getCategory();},[])

  console.log(category);

  return (
    <>
      <h1>If you are here then you have NextUI</h1>
    </>
  )
}

export default App
