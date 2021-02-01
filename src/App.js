import React, {useState} from 'react'
import "./App.css"

function App() {
  const [count, setcount]=useState(0)
  const[name, setName]=useState('')
  const[followers, setFollowers]=useState('')
  const[user, setUser]=useState('')



  const fetching = () =>{
    fetch(`https://api.github.com/users/${user}`)
      .then(res=>res.json())
      .then(data=>{
        setData(data)
      })
      const increment = () => {
        
        setcount(count+1)
        setUser('jacksmith'+Math.floor(Math.random()*100))
        console.log(user)
        console.log(followers)
      } 
    
      const reset=()=>{
        
        setcount(count-2)
        setUser('jacksmith'+Math.floor(Math.random()*100))
        console.log(user)
        console.log(followers)
      }

      (count===2)?(reset()):(increment())
  }

  const setData = ({name, followers})=>{
    setName(name)
    setFollowers(followers)
  }

  return (
    <div className="App">
      <div className='box' style={{ backgroundColor: (count===0) ? ('blue') : ('white') }}>
        <h1>{(count===0) ? (name) : ('')}</h1>
        <h2>{(count===0) ? (followers+' followers') : ('')} </h2>
      </div>
      <div className='box' style={{ backgroundColor: (count===1) ? ('blue') : ('white') }}>
        <h1>{(count===1) ? (name) : ('')}</h1>
        <h2>{(count===1) ? (followers+' followers') : ('')} </h2>
      </div>
      <div className='box' style={{ backgroundColor: (count===2) ? ('blue') : ('white') }}>
        <h1>{(count===2) ? (name) : ('')}</h1>
        <h2>{(count===2) ? (followers+' followers') : ('')} </h2>
      </div>
      <button onClick={fetching}>change</button>
    </div>
  );
}

export default App;
