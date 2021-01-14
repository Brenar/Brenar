import React, {useEffect} from "react"
//import './App.css';
import {connect} from 'react-redux'
import AppHeader from '../app-header'
import AddForm from '../app-add-form'
import FilmList from '../film-list'
import AppFooter from '../app-footer'

<<<<<<< HEAD
=======
import './app.scss'

import {setItemToLocalStorage, getItemToLocalStorage} from '../../utils'

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
  try {
    const cookieParseData = getItemToLocalStorage("table")
    if(getItemToLocalStorage("table") !== 'undefined' && cookieParseData){
      return cookieParseData
    }
  } catch (e) {
    console.log("table has an error", JSON.stringify(e))
  }
    return defaultFilmList
}

const App = () => {
  const [table, setTable] = useState(getInitTable())
  const [checkedLines, setCheckedLines] = useState([])
  const [temp, setTemp] = useState('')
  const [changeTempTableData, setChangeTempTableData] = useState([])


  const addFilm = newFilm => {
    setTable(setItemToLocalStorage("table",[...table, {id: table.length + 1, ...newFilm, isChecked: false}]))
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
>>>>>>> 643899c38dc43391e272a8ede54a6752c6914491

import {
    currencyListSelector,
    addFilm
} from '../../models/currency'

<<<<<<< HEAD
function App({currencyList}) {
=======
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
>>>>>>> 643899c38dc43391e272a8ede54a6752c6914491

    // useEffect(() => {
    //     initCurrencyList()
    //     return () => {
            
    //     }
    // }, [initCurrencyList])

    const handleSubmit = (data) => {
        console.log(data)
    }

<<<<<<< HEAD
    return (
        <div className="App">
            <header className="App-header">
                <div>
                  <AppHeader/>
                  <AddForm/>
                  <FilmList/>
                  <AppFooter/>
                </div>
                <div>
                </div>
            </header>
        </div>
    );
=======
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
>>>>>>> 643899c38dc43391e272a8ede54a6752c6914491
}

export default connect(state => ({
        currencyList: currencyListSelector(state)
    }),
    {})(App)

