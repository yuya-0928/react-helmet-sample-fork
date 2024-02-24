import { useState } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const App = () => {
  const [page, setPage] = useState(0)

  return (
    <div>
      <Helmet>
        <title>Helmet Sample</title>
      </Helmet>
      <select value={page} onChange={(e) => setPage(Number(e.target.value))}>
        <option value={0}>Select Page</option>
        <option value={1}>Page 1</option>
        <option value={2}>Page 2</option>
        <option value={3}>Page 3</option>
      </select>
      {page === 1 && <Page1 />}
      {page === 2 && <Page2 />}
      {page === 3 && <Page3 />}
    </div>
  )
}

export default App
