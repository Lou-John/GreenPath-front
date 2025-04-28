import { useEffect, useState } from 'react'
import {Header} from '../features/header'
import '../index.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/Plants`)
        const data = await response.json()
        setApiData(data)
      } catch (error) {
        console.error('Error fetching API data:', error)
      }
    }

    fetchData()
  }, [])

  return (
   <div className="flex flex-col min-h-screen">
     <Header />
     <main className="flex-grow p-6">
       <h2 className="text-2xl font-semibold mb-4">Welcome to GreenPath</h2>
       <p className="text-gray-700">
         This is the main content area of the app. Start building your app here!
       </p>
     </main>
     <footer className="bg-gray-800 text-white text-center p-4">
       <p>&copy; 2025 GreenPath. All rights reserved.</p>
     </footer>
   </div>
 );
}

export default App