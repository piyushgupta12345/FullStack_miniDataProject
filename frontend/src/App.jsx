import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/v1/data')
      .then((response) => {
        setData(response.data)
        // console.log(response)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  return (
    <>
      <h1>Hello welcome mini project</h1>
      <h2>Data: {data.length}</h2>
      {
        data.map((data) => (
          <div key={data.id}>
            <h3>{data.name}</h3>
            <p>{data.favNumkeen}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
