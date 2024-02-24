import { Suspense } from "react"
import { Helmet } from "react-helmet"
import Async from "./Async"

const Loading = () => <div>loading</div>

const Page2 = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div>
        <Helmet>
          <title>Page 2</title>
        </Helmet>
        Page 2
        <Async/>
      </div>
    </Suspense>
  )
}


export default Page2
