import React,{useState} from 'react';
import './App.css';

function App() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");

  function saveData(){
    console.log(name, email, mobile);
    const data  = {name, email, mobile}
    fetch("http://localhost:3000/posts",{ 
      method : "POST",
      headers : {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    }).then((result) => {
      result.json().then((res) => {
        console.log("res", res)
      })
    })
  }
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}

export default App;
