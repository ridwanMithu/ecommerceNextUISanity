
import { Star, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../Config/SanityConfig';


export const ProductDetilsCard = () => {
  const [singleProd, setSingleProd]=useState([]);
  const {id}=useParams();
  const getSingleProd=async (id)=>{
    const query=`*[_type=="allproducts"][_id=='${id}']
    {productName, productPrice, productAmount,productStock,"imageUrl": productImage.asset->url,"category":category->categoryName}`
    const prodDetails=await client.fetch(query)
    setSingleProd(prodDetails[0])
  }

  useEffect(()=>{
    getSingleProd(id);
  },[])

  


  return (
    <section className="overflow-hidden shadow-lg rounded-2xl">
      <div className="max-w-5xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center mx-auto lg:w-4/5">
          <img
            alt={singleProd.productName}
            className="object-cover w-full h-64 rounded lg:h-96 lg:w-1/2"
            src={singleProd.imageUrl}
          />
          <div className="w-full mt-6 lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">#{singleProd.category}</h2>
          <h1 className="my-4 text-3xl font-semibold text-black">{singleProd.productName}</h1>


            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
              
              <div className="flex items-center gap-16">
              <span className="justify-start mr-3 text-sm font-semibold">Stock: {singleProd.productStock}</span>
                
                <div className="relative">
                <span className="mr-3 text-sm font-semibold">Amount</span>
                  <select className="py-2 pl-3 pr-10 text-sm border border-gray-300 rounded appearance-none focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 title-font">{singleProd.productPrice} Taka</span>
              <button
                type="button"
                className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
