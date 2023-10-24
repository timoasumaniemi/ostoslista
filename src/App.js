import './App.css';
import axios from 'axios';
import { useState } from 'react';

const url = "http://localhost:3001/api/shoppinglist"

function App() {
  const [items, setItems] = useState([])

  function FetchData(e) {
    e.preventDefault()
    console.log("Fetching data")

    axios.get(url).
      then(response => {
        if (!response.data) {
          throw ("no content: " + response.data.message)
        }

        setItems(response.data)

      }).catch(error => {
        console.log(error)
        alert(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ostolista v1.0</h1>
        <div>
          <button onClick={(e) => { FetchData(e) }}>Fetch</button>
          <ol>{items.map(item => (
            <li key={item.id}>{item.description}, Amount: {item.amount}</li>
          ))}
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
