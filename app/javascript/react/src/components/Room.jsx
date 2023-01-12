import React, {useState, useEffect} from 'react'                          
import ReactDOM from 'react-dom'
import axios from 'axios'
import actioncable from 'actioncable'


const Room = () => {
  const cable = actioncable.createConsumer('ws://127.0.0.1:3000/cable') 
  const [messages, setMessages] = useState(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')


  useEffect(() => {
    (async () => {
      const response = await axios.get('/messages')
      setLoading(false)
      setMessages(response.data)
      console.log(response.data)
    })()
  }, [])

  useEffect(() => {
    cable.subscriptions.create('room_channel', {
      received: (data) => {
        console.log(data)
        setMessages([...messages, data])
      }
    }
    )
  }, [])

  

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  if (loading) {
    return <h1> loading </h1>
  }

  return (
      <>
        {messages.length === 0 ? <h1> No messages yet </h1> : messages.map((message, i) => <h1 key={i}>{message.content}</h1>)}
   
        
      </>
    )
}

export default Room