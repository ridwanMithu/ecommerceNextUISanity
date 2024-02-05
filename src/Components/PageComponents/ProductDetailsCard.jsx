
import { Star, ChevronDown } from 'lucide-react'

export const ProductOverviewTwo = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-5xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center mx-auto lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="object-cover w-full h-64 rounded lg:h-96 lg:w-1/2"
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          />
          <div className="w-full mt-6 lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Nike</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Nike Air Max 21A</h1>
            <div className="flex items-center my-4">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="inline-block ml-3 text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
              neque adipisci eum enim, natus illo inventore totam?
            </p>
            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">Color</span>
                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-green-200 border-2 border-gray-300 rounded-full focus:outline-none"></button>
              </div>
              <div className="flex items-center ml-auto">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="py-2 pl-3 pr-10 text-sm border border-gray-300 rounded appearance-none focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>8 UK</option>
                    <option>9 UK</option>
                    <option>10 UK</option>
                  </select>
                  <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 title-font">₹47,199</span>
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
