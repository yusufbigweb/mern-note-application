import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const fetchNotes = async ()=>{
        try {
          const res = await axios.get("http://localhost:5001/api/notes")
          // const data = await res.json();
          console.log(res.data)      
        } catch (error) {
          console.log("error fetching notes", error)
        }
    }

    fetchNotes()

  }, [])


  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage