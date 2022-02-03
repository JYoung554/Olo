import axios from 'axios'
import './App.css'
import { BASE_URL } from './globals'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Search from './components/Search'
import Post from './components/Post'

function App() {
  let test = async (req, res) => {
    const hello = await axios.get(`${BASE_URL}/auth`)
    console.log('Hi')
    return res.send(hello)
  }

  useEffect(() => {
    test()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Nav />
        <p></p>
        <Search />

        <Post />
      </div>
    </div>
  )
}

export default App
