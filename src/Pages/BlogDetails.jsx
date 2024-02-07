// user can come and read the complete blog from here

import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { client } from "../Config/SanityConfig";
import { useEffect, useState } from "react";
import {PortableText} from '@portabletext/react'
import { Blocks } from "lucide-react";

export const BlogDetails = () => {
  const [singleBlog, setSingleBlog]=useState([]);
  const {id}=useParams();
  const getSingleBlog=async (id)=>{
    const query=`*[_type=="blogSection"][_id=='${id}']{blogImage,blogCategory,blogDetails,blogAuthor,authorEmail,blogTopic,authorWebsite,publishingDate}`;
    const blogPage=await client.fetch(query)
    setSingleBlog(blogPage[0])
  }
  console.log(singleBlog)
  useEffect(()=>{
    getSingleBlog(id);
  },[])


  return (
    <>
    <Helmet>
        <title>{singleBlog.blogTopic}</title>
        <link rel="canonical" href="/blog" />
      </Helmet>


    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">


          <h1 className="max-w-4xl mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          {singleBlog.blogTopic}
          </h1>
          <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[20px] font-semibold text-gray-900">
          #{singleBlog.blogCategory}
          </span>
        </div>
          <p className="max-w-3xl mt-8 text-lg text-gray-700">
          <PortableText
  value={singleBlog.blogDetails}
  components={Blocks}
/>
          </p>
          <div className="mt-8">

          </div>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src={singleBlog.blogImage}
            alt=""
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default BlogDetails;