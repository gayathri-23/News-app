import React from 'react';
import {useState,useEffect} from 'react';
import './index.css';

const App =() => {

  const[updates,setNewupdates]=useState([])
  const[search,setSearchQuery]=useState('react');
  const[url,setUrl]=useState(`https://hn.algolia.com/api/v1/search?query=react`);

  const findnews =() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
    .then(result=>result.json())
    .then(data=>setNewupdates(data.hits))
    .catch(err=>console.log(err));
}
  useEffect(()=>{
    findnews()
  },[url])

  const makechange=(e)=>{
    setSearchQuery(e.target.value)
  }

  const handleinput = (e)=>{
  e.preventDefault()
  setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`)
  }
  
  return(
    <div>
      <h1> News App Project</h1>
      <form onSubmit={handleinput}>
        <input type="text" value={search} onChange={makechange}/>
        <button> search news here</button>
      </form>
      {updates.map((n,i)=>(
        <div className="content">
        <p key={i}> {n.title}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
