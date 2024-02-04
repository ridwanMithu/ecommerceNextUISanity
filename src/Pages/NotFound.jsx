
import { Helmet } from "react-helmet-async"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <link rel="canonical" href="/home" />
      </Helmet>
      <h1>Page not found</h1>
    </>
  )
}
