import {createSelector} from 'reselect'


export const moduleName = 'filmTable'

const ADD_FILM = 'ADD_FILM'
const HANLDE_ASCENDING = 'HANLDE_ASCENDING'
const HANDLE_DISCENDING = 'HANDLE_DISCENDING'
const HANDLE_DELETE_FILM = 'DELETE_FILM'
const HANDLE_CHECK_LINE = 'HANDLE_CHECK_LINE'
const HANDLE_CHANGE_LINE = 'HANDLE_CHANGE_LINE'
const HANDLE_CHANGE_TEMP = 'HANDLE_CHANGE_TEMP'
const HANDLE_VISIBLE_FILMS = 'HANDLE_VISIBLE_FILMS'
const HANDLE_SAVE_CHANGES = 'HANDLE_SAVE_CHANGES'
const HANDLE_CHANGE_CHANGE_LINE = 'HANDLE_CHANGE_CHANGE_LINE'


export const ReducerRecord = {
    filmList: [
      {
        id: 1,
        name: "Terminator",
        description: "I'll be back",
        genre: "action",
        rating: "10",
        isChecked: false
      },
      {
        id: 2,
        name: "Lord of the ring",
        description: "Frodo give back the ring",
        genre: "adventure",
        rating: "9",
        isChecked: false
      }
    ],
    checkedLines: [],
    changeTempTableData: [],
    temp: '',
    visibleFilms: null
}


export default function reducer(state = ReducerRecord, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_FILM:
            return Object.assign({}, state, {
                filmList: payload
            })
        case HANDLE_CHANGE_CHANGE_LINE:
            return Object.assign({}, state, {
                changeTempTableData: payload
            })
        case HANDLE_CHECK_LINE:
            return Object.assign({}, state, {
                checkedLines: payload
            })
        case HANDLE_CHANGE_LINE:
            return { ...state,
                changeTempTableData: payload.changeTempTableData, 
                checkedLines: payload.checkedLines}
        case HANDLE_CHANGE_TEMP:
            return Object.assign({}, state, {
                temp: payload
            })
        case HANDLE_DELETE_FILM:
            return Object.assign({}, state, {
                filmList: payload
            })
        case HANDLE_VISIBLE_FILMS:
            return Object.assign({}, state, {
                visibleFilms: payload
            })
        case HANDLE_SAVE_CHANGES:
            return Object.assign({}, 
                state, 
                {filmList: payload.filmList},
                {checkedLines: payload.checkedLines})
        default:
            return state
    }
}

export const stateSelector = state => state[moduleName]
export const filmListSelector = createSelector(stateSelector, state => state.filmList)
export const filmCheckSelector = createSelector(stateSelector, state => state.checkedLines)
export const filmVisibleSelector = createSelector(stateSelector, state => state.visibleFilms)
export const tempSelector = createSelector(stateSelector, state => state.temp)

export const addFilm = (film, state) => ({
    type: ADD_FILM,
    payload: [...state, {id: state.length + 1, ...film, isChecked: false}]
})

export const handleAscending = fieldName => (dispatch, getState) => {
    dispatch({
        type: HANLDE_ASCENDING,
        payload: getState()[moduleName].filmList.sort((a, b) => {
            if (a[fieldName] <= b[fieldName]) {
              return -1
            } else if (a[fieldName] > b[fieldName]) {
              return 1
            } else {
              return 0
            }
          })
    })
  }

export const handleDescending = fieldName => (dispatch, getState) => {
    dispatch({
        type: HANDLE_DISCENDING,
        payload: getState()[moduleName].filmList.sort((a, b) => {
            if (a[fieldName] < b[fieldName]) {
                return 1
            } else if (a[fieldName] > b[fieldName]) {
                return -1
            } else {
                return 0
            }
            })
    })
}

 export const handleCheckLine = lineId => (dispatch, getState) => {
    const moduleData = getState()[moduleName]

    const currentIndex = moduleData.checkedLines.indexOf(lineId)
    let prevData = moduleData.checkedLines
    let changeData = moduleData.changeTempTableData
    if (currentIndex === -1) {
        prevData = [...prevData, lineId]
        let filmData = [...moduleData.filmList]
        let film = filmData.filter(f => f.id === lineId)
        let film1 = film[0]
        changeData = [...changeData, film1]
        console.log(film1)
      } else {
        prevData = prevData.filter(f => f !== lineId)
        changeData = changeData.filter(f => f.id !== lineId)
      }
    dispatch({
        type: HANDLE_CHANGE_LINE,
        payload: {checkedLines: prevData, changeTempTableData: changeData}
    })
  }


  export const onRemoveLines = () => (dispatch, getState) => {
    const moduleData = getState()[moduleName]
    let changeData = moduleData.checkedLines
    let filmData = moduleData.filmList
    filmData = filmData.filter(f => !changeData.includes(f.id))

    dispatch({
        type: HANDLE_DELETE_FILM,
        payload: filmData
    })
  }


export const searchFilms = (temp) => (dispatch, getState) => {
    const moduleData = getState()[moduleName]
    const table = moduleData.filmList
    if (temp.length === 0) {
        
    }

    const newTable = table.filter(film => film.name.toLowerCase().includes(temp.toLowerCase()) ||
        film.description.toLowerCase().includes(temp.toLowerCase()) ||
        film.genre.toLowerCase().includes(temp.toLowerCase()) ||
        film.rating.toLowerCase().includes(temp.toLowerCase())
    )
    dispatch({
        type: HANDLE_VISIBLE_FILMS,
        payload: newTable
    })
}

export const handleChangeData = (value, lineId, fieldName) => (dispatch, getState) => {
    const newData = getState()[moduleName].changeTempTableData
    newData.map((line, key) => {
        if(line.id === lineId) {
            newData[key][fieldName] = value
        }
        return line
    })
    dispatch({
        type: HANDLE_CHANGE_CHANGE_LINE,
        payload: newData
    })
}

export const handleChangeLine = () => (dispatch, getState) => {
    const lines = getState()[moduleName].changeTempTableData
    const filmData = getState()[moduleName].filmList
    
    filmData.map((item, key) => {

        return lines.map((line) => {
          if (filmData[key].id === line.id) {
            filmData[key].name = line.name
            filmData[key].description = line.description
            filmData[key].genre = line.genre
            filmData[key].rating = line.rating
            filmData[key].isChecked = false
          }
          return line
        })
    }
    )
    dispatch({
        type: HANDLE_SAVE_CHANGES,
        payload: {filmList: filmData, checkedLines: []}
    })
  }
