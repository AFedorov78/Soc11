import logo from './logo.svg';
import React, {  useState } from 'react';
import './App.css';
import axios from 'axios';



function App(){
  const [books, setBooks] = useState(null);

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data) 
    }

  return (
    <div className="App">
    <h1>Game of Thrones Books</h1>
    <h2>Fetch a list from an API and display it</h2>

    {/_ Запрос данных из API _/}
    <div>
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>
    </div>

    {/_ Отображение данных из API _/}
    <div className="books">
      // Данные из API будут тут
          </div>

  </div>
  )
}

export default App;
