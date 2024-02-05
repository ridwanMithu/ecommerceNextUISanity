import { Helmet } from "react-helmet-async"
import {Input, Select, SelectItem} from "@nextui-org/react";
import ProductCard from "../Components/PageComponents/ProductCard";

export default function AllProducts() {
  return (

      <>
        <Helmet>
          <title>Shop</title>
          <link rel="canonical" href="/home" />
        </Helmet>
        <form className="flex justify-center"><Input type="text" label="search" className="max-w-md " />
        <Select 
        label="Select an animal" 
        className="max-w-md mx-10" 
      >
      <SelectItem>Meat Products</SelectItem>
      <SelectItem>Dairy</SelectItem>
      <SelectItem>Fruits</SelectItem>
      </Select>
        </form>
      <div className="flex justify-center m-10">
        <div className="w-[20vw]">
        <ProductCard/>
        </div>
        <div className="w-[20vw]">
        <ProductCard/>
        </div>
        <div className="w-[20vw]">
        <ProductCard/>
        </div>
        <div className="w-[20vw]">
        <ProductCard/>
        </div>
      </div>
      </>
    )

}
