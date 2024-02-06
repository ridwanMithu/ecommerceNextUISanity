// Blog will get react slider
import { Helmet } from "react-helmet-async"
import BlogSlider from "../Components/PageComponents/BlogSlider";

export default function Blog() {

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <link rel="canonical" href="/blog" />
      </Helmet>
      <p className="text-3xl font-bold text-center text-black">Find all the recipes and food and nutritions</p>
      
      <div className="w-full h-[90vh] bg-red-100">

      <div className="flex flex-wrap justify-center gap-3">
      <BlogSlider/>
      </div>


      </div>
    </>
  )
}