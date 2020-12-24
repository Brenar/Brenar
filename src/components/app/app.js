import React, {useState, useCallback} from 'react';

import AppHeader from '../app-header';
import AddForm from '../app-add-form';
import FilmList from '../film-list';
import AppFooter from '../app-footer';

import './app.css';

const defaultFilmList = [
  {id: 1, name: "Terminator", description: "I'll be back", genre : "action", rating: "10", isChecked: false},
  {id: 2, name: "Lord of the ring", description: "Frodo give back the ring", genre : "adventure", rating: "9", isChecked: false},
  {id: 3, name: "American pie", description: "Don't eat the pie", genre : "comedy", rating: "10", isChecked: false},
]

const App = () => {
  const [table, setTable] = useState(defaultFilmList)
  const [checkedLines, setCheckedLines] = useState([])
  const [temp, setTemp] = useState('')

  const addFilm = newFilm => {
    setTable([...table, {id: table.length + 1, ...newFilm}])
  }

  const handleAscending = fieldName => {
    setTable(prevTable => {
      return prevTable.sort((a, b) => {
        if(a[fieldName] <= b[fieldName]){
          return -1
        } else if(a[fieldName] > b[fieldName]){
          return 1
        } else {
          return 0
        }
      })
    })
  }

  const handleDescending = fieldName => {
    setTable(prevTable => {
      return prevTable.sort((a, b) => {
        if(a[fieldName] < b[fieldName]){
          return 1
        } else if(a[fieldName] > b[fieldName]){
          return -1
        } else {
          return 0
        }
      })
    })
  }

  const handleCheckLine = lineId => {
    setCheckedLines(prevCheckedLines => {
      const currentIndex = prevCheckedLines.indexOf(lineId)
      if(currentIndex !== -1){
        return [...prevCheckedLines].filter(f => f !== lineId)
      } else {
        return [...prevCheckedLines, lineId]
      }
    })
  }

  const handlers = {handleAscending, handleDescending, handleCheckLine}



  const changeTemp = (newTemp => {
    setTemp(newTemp)
  })

  const searchFilms = ((table, temp) => {
    if(temp.length === 0) {
      return table
    }

    return table.filter(film => {
      return film.name.toLowerCase().includes(temp.toLowerCase()) ||
      film.description.toLowerCase().includes(temp.toLowerCase()) || 
      film.genre.toLowerCase().includes(temp.toLowerCase()) || 
      film.rating.toLowerCase().includes(temp.toLowerCase())
    })
  })

  const visibleFilms = searchFilms(table, temp)

  const handleDeleteLines = useCallback(() => {
    setTable([...table].filter(f => !checkedLines.includes(f.id)))
    setCheckedLines([])
  }, [checkedLines, setTable, setCheckedLines, table])

    return (
        <div className="app">
            <AppHeader/>
            <div className="add-form">
                <AddForm handleAddData={addFilm} />
            </div>
            <FilmList tableData={visibleFilms} {...handlers} />
            <AppFooter changeTemp={changeTemp} onRemoveLines={handleDeleteLines}/>
        </div>
    )
}

export default App;