import { Helmet } from "react-helmet-async"

export default function AllProducts() {
  return (

      <>
        <Helmet>
          <title>Shop</title>
          <link rel="canonical" href="/home" />
        </Helmet>
        <h1>Browse all products</h1>
      </>
    )

}
