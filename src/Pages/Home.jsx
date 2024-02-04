import { Helmet } from "react-helmet-async"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="/home" />
      </Helmet>
      <h1>Home page details</h1>
    </>
  )
}
