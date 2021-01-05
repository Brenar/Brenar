import React, {useState, useCallback, memo} from 'react'

import AppHeader from '../app-header'
import AddForm from '../app-add-form'
import FilmList from '../film-list'
import AppFooter from '../app-footer'

import './app.scss'

import {setItemToLocalStorage, getItemToLocalStorage} from '../../utils'


let db = null



const dbAddFilm = (films) =>  {
  try{
    for (let i = 0; i < films.length; i++) {
      const tx = db.transaction('film-list', 'readwrite')
      const filmsItem = tx.objectStore('film-list')
      filmsItem.add(films[i])
    }
  } catch {
      const tx = db.transaction('film-list', 'readwrite')
      const filmsItem = tx.objectStore('film-list')
      filmsItem.add(films[films.length - 1])
  }
  return films
}

const dbGetFilm = () => {
  const tx = db.transaction('film-list', 'readwrite')
  const filmsItem = tx.objectStore('film-list')
  const request = filmsItem.openCursor()
  const films = []
  request.onsuccess = e => {
    const cursor = e.target.result

    if(!cursor) { 
      return
    } else {
      alert(`${cursor.key} , ${cursor.value.name}`)
      films.push(cursor.value)
      cursor.continue()
    }
    
  }
  console.log(films)
  return films
}

const filmDb = () => {

  const request = indexedDB.open('films')

  request.onupgradeneeded = e => {
    db = e.target.result
    if (!db.objectStoreNames.contains('film-list')) { 
      db.createObjectStore('film-list', {keyPath: 'id'}); 
    }
  }

  request.onsuccess = e => {
    db = e.target.result
  }

  request.onerror = e => {
    console.log('error')
  }
}

filmDb()


const defaultFilmList = [
  {id: 1, name: "Terminator", description: "I'll be back", genre: "action", rating: "10", isChecked: false},
  {
    id: 2,
    name: "Lord of the ring",
    description: "Frodo give back the ring",
    genre: "adventure",
    rating: "9",
    isChecked: false
  },
  {id: 3, name: "American pie", description: "Don't eat the pie", genre: "comedy", rating: "10", isChecked: false},
]

const getInitTable = () => {
  // try {
  //   const cookieParseData = getItemToLocalStorage("table")
  //   if(getItemToLocalStorage("table") !== 'undefined' && cookieParseData){
  //     return cookieParseData
  //   }
  // } catch (e) {
  //   console.log("table has an error", JSON.stringify(e))
  // }
  try {
    return dbGetFilm()
  } catch (e) {
    console.log(e.error)
  }

  return defaultFilmList
}

const App = () => {
  const [table, setTable] = useState(getInitTable())
  const [checkedLines, setCheckedLines] = useState([])
  const [temp, setTemp] = useState('')
  const [changeTempTableData, setChangeTempTableData] = useState([])


  const addFilm = newFilm => {
    setTable(dbAddFilm([...table, {id: table.length + 1, ...newFilm, isChecked: false}]))
  }

  const handleAscending = fieldName => {
    setTable(prevTable => {
      return setItemToLocalStorage("table", prevTable.sort((a, b) => {
        if (a[fieldName] <= b[fieldName]) {
          return -1
        } else if (a[fieldName] > b[fieldName]) {
          return 1
        } else {
          return 0
        }
      }))
    })
  }

  const handleDescending = fieldName => {
    setTable(prevTable => {
      return setItemToLocalStorage("table", prevTable.sort((a, b) => {
        if (a[fieldName] < b[fieldName]) {
          return 1
        } else if (a[fieldName] > b[fieldName]) {
          return -1
        } else {
          return 0
        }
      }))
    })
  }

  const handleCheckLine = lineId => {
    setCheckedLines(prevCheckedLines => {
      const currentIndex = prevCheckedLines.indexOf(lineId)
      if (currentIndex !== -1) {
        setChangeTempTableData([...changeTempTableData].filter(f => f.id !== lineId))
        return [...prevCheckedLines].filter(f => f !== lineId)
      } else {
        setChangeTempTableData([...changeTempTableData, ...table.filter(f => f.id === lineId)])
        return [...prevCheckedLines, lineId]
      }
    })
  }

  const handleChangeLine = () => {
    const lines = changeTempTableData
    setTable(prevTable => {
      prevTable.map((item, key) => {
        lines.map((line) => {
          if (prevTable[key].id === line.id) {
            prevTable[key].name = line.name
            prevTable[key].description = line.description
            prevTable[key].genre = line.genre
            prevTable[key].rating = line.rating
            prevTable[key].isChecked = false
          }
        })
      })
      return setItemToLocalStorage("table", prevTable)
    }
    )
    setCheckedLines([])
  }

  const handlers = {handleAscending, handleDescending, handleCheckLine, setChangeTempTableData}

  const changeTemp = (newTemp => {
    setTemp(newTemp)
  })

  const searchFilms = ((table, temp) => {
    if (temp.length === 0) {
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
    setTable(setItemToLocalStorage("table", [...table].filter(f => !checkedLines.includes(f.id))))
    setCheckedLines([])
  }, [checkedLines, setTable, setCheckedLines, table])

  return (
    <div className="app">
      <AppHeader/>
      <div className="add-form">
        <AddForm handleAddData={addFilm}/>
      </div>
      <FilmList tableData={visibleFilms} checkedLines={checkedLines} {...handlers} />
      <AppFooter
        changeTemp={changeTemp}
        onRemoveLines={handleDeleteLines}
        onChangeLine={handleChangeLine}
        changeTempTableData={changeTempTableData}
      />
    </div>
  )
}

const areEqual = (prevProps, nextProps) => {
  if(JSON.stringify(prevProps.changeTempTableData) !== JSON.stringify(nextProps.changeTempTableData)) {
    return true
  }

  if(JSON.stringify(prevProps) !== JSON.stringify(nextProps)){
    return false
  } else {
    return true
  }
}

export default memo(App, areEqual);