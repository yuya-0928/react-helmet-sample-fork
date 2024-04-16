import { Suspense } from "react"
import Async from "./Async"
import { useSetDocumentTitle } from "./useSetDocumentTitle"

const Loading = () => <div>loading</div>

const Page2 = () => {
  useSetDocumentTitle('Page 2')
  return (
    <Suspense fallback={<Loading/>}>
      <div>
        Page 2
        <Async/>
      </div>
    </Suspense>
  )
}


export default Page2
