import './App.css';
import axios from 'axios';
import { useState } from 'react';

const url = "http://localhost:3001"

function App() {
const [data, setData] = useState("")

  function FetchData(e){
    e.preventDefault()
    console.log("Fetching data")

    axios.get(url).
    then(response => {
      console.log("Data: id=" + response.data.data.id + " : description= " + response.data.data.description + " : amount= " + response.data.data.amount)
      setData(response.data.message)
    }).catch(error => {
      console.log(error)
      alert(error.response.data.message)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Ostolista v1.0</h1>
      <div>
        <button onClick={(e) =>{ FetchData(e)} }>Fetch</button>
        <p>{data}</p>
      </div>
      </header>
    </div>
  );
}

export default App;
