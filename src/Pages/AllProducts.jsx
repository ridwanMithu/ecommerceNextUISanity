import { Helmet } from "react-helmet-async"
import {Input, Select, SelectItem} from "@nextui-org/react";
import ProductCard from "../Components/PageComponents/ProductCard";
import { useEffect, useState } from "react";
import { client } from "../Config/SanityConfig";

export default function AllProducts() {
  const [grocery, setGrocery]=useState([]);
  const[category,setCategory]=useState([])
  //to get category list
  const getCategory=async()=>{
  let catquery= `*[_type=="category"]{categoryName, _id}`;
  const categoryData= await client.fetch(catquery);
  setCategory(categoryData);}

    const  handleSearch = (evt) => {
      // console.log(e.target.value); 
      const searchEntry=evt.target.value; 
      productSearch(searchEntry);
    }

    const productSearch=async(searchValue)=>{
      
      const searchQuery=`*[_type=="allproducts" && (productName match "${searchValue}*")]
      {productName, productPrice, productAmount,productStock,
        "imageUrl": productImage.asset->url,"category":category->categoryName}`;
      const searchResult=await client.fetch(searchQuery);
      setGrocery(searchResult);
    }


      
  // to get grocery items
  const getGrocery=async ()=>{
    const groceryQuery=`*[_type=="allproducts"]{productName,productAmount,"imageUrl": productImage.asset->url,productStock, "type":category->categoryName,_id,productPrice }`
    const groceryData=await client.fetch(groceryQuery);
    setGrocery(groceryData)
   };
   useEffect(()=>{
    getGrocery();
    getCategory();
    productSearch();
   },[]);

  return (

      <>
        <Helmet>
          <title>Shop</title>
          <link rel="canonical" href="/home" />
        </Helmet>
      <div>
      <form className="flex justify-center"><Input name="userSearchValue" type="text" label="Search your item" className="max-w-md " onChange={handleSearch} />
        <Select 
        label="Select a Category" 
        className="max-w-md mx-10" 
      >
       {category.map(item=> <SelectItem key={item._id} value={item.categoryName}>{item.categoryName}</SelectItem>)}
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
