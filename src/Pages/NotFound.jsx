import { ArrowLeft } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <link rel="canonical" href="/home" />
      </Helmet>
      <div>
      <div className="py-10">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <div className="flex items-center justify-center mt-4 gap-x-3">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            <Link to="/home">Go Back</Link>
          </button>
          <button
            type="button"
            className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
      </div>
    </>
  )
}
