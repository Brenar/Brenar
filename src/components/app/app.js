import React, {useState} from 'react';

import AppHeader from '../app-header';
import AddForm from '../app-add-form';
import FilmList from '../film-list';
import AppFooter from '../app-footer';

import './app.css';

const defaultFilmList = [
  {id: 1, name: "Terminator", description: "I'll be back", genre : "action", rating: 16, isChecked: false},
  {id: 2, name: "Lord of the ring", description: "Frodo give back the ring", genre : "adventure", rating: 14, isChecked: false},
  {id: 3, name: "American pie", description: "Don't eat the pie", genre : "comedy", rating: 16, isChecked: false},
]

const App = () => {
  const [table, setTable] = useState(defaultFilmList)

  const addFilm = newFilm => {
    setTable(prevState => {

      return [...prevState, {id: prevState.length+ 1, ...newFilm}]
    })
  }

    return (
        <div className="app">
            <AppHeader/>
            <div className="add-form">
                <AddForm handleAddData={addFilm}/>
            </div>
            <FilmList tableData={table} />
            <AppFooter/>
        </div>
    )
}

export default App;