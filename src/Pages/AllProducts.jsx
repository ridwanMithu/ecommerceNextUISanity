import { Helmet } from "react-helmet-async"
import {Input, Select, SelectItem} from "@nextui-org/react";
import ProductCard from "../Components/PageComponents/ProductCard";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [grocery, setGrocery]=useState([]);
  
  const getGrocery=()=>{
    fetch("/products.json")
    .then((res)=>res.json())
    .then((data) =>setGrocery(data));
   };
   console.log(grocery);
   useEffect(()=>{
    getGrocery();
   },[]);

  return (

      <>
        <Helmet>
          <title>Shop</title>
          <link rel="canonical" href="/home" />
        </Helmet>
      <div>
      <form className="flex justify-center"><Input type="text" label="Search your item" className="max-w-md " />
        <Select 
        label="Select a Product" 
        className="max-w-md mx-10" 
      >
      <SelectItem>Meat Products</SelectItem>
      <SelectItem>Dairy</SelectItem>
      <SelectItem>Fruits</SelectItem>
      </Select>
        </form>
      </div>
      <div className="m-auto my-5">
        <div className="flex flex-wrap justify-center gap-7">
        {
          grocery.map((groceryItem)=>(
            <ProductCard key={groceryItem.id} groceryInfo={groceryItem} />
          ))}
        </div>

      </div>
      </>
    )

}
