import { Helmet } from "react-helmet-async"

export default function TopSeller() {
  return (
    <>
      <Helmet>
        <title>Top Seller</title>
        <link rel="canonical" href="/home" />
      </Helmet>
      <h1>Find all the top selling items from here</h1>
    </>
  )
}
