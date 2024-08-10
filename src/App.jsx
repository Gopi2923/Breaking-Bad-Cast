import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Components/ui/Header'
import './App.css'
import './index.css'


const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const fetchItems = async () => {
      const result = await axios(` https://api.breakingbadquotes.xyz/v1/quotes`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
     }

     fetchItems()
  }, [])
  return (
    <div className='container'>
     <Header />
    </div>
  )
}

export default App
