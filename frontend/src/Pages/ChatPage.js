import React, { useEffect } from 'react'
import axios from "axios"

const ChatPage = () => {


    // fetching api to get data using axios 
    const fetchData= async ()=>{
        const {data}= await axios.get("/api/chat")
        console.log(data);
    }
    useEffect(()=>{
        fetchData()
    })
  return (
    <div>ChatPage

    </div>
  )
}

export default ChatPage