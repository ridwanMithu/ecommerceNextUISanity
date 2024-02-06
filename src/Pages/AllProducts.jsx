import { Helmet } from "react-helmet-async"
import {Input, Select, SelectItem} from "@nextui-org/react";
import ProductCard from "../Components/PageComponents/ProductCard";
import { useEffect, useState } from "react";
import { client } from "../Config/SanityConfig";

export default function AllProducts() {
  const [grocery, setGrocery]=useState([]);
  
  const getGrocery=async ()=>{
    const groceryQuery=`*[_type=="allproducts"]{productName,productAmount,"imageUrl": productImage.asset->url,productStock, category,_id,productPrice }`
    const groceryData=await client.fetch(groceryQuery);
    setGrocery(groceryData)
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
            <ProductCard key={groceryItem._id} groceryInfo={groceryItem} />
          ))}
        </div>

      </div>
      </>
    )

}
