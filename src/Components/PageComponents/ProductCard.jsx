

export default function ProductCard({groceryInfo}) {
  return (
    <div className="w-[25vw] rounded-md border-black shadow-lg shadow-gray-500">
      <img
        src={groceryInfo.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover p-2"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{groceryInfo.name}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {groceryInfo.description}
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
