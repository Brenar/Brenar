import {createSelector} from 'reselect'

const ADD_FILM = 'ADD_FILM'
const HANLDE_ASCENDING = 'HANLDE_ASCENDING'
const HANDLE_DISCENDING = 'HANDLE_DISCENDING'
const HANDLE_DELETE_FILM = 'DELETE_FILM'
const HANDLE_CHECK_LINE = 'HANDLE_CHECK_LINE'
const HANDLE_CHANGE_LINE = 'HANDLE_CHECK_LINE'
const HANDLE_CHANGE_TEMP = 'HANDLE_CHANGE_TEMP'
const HANDLE_VISIBLE_FILMS = 'HANDLE_VISIBLE_FILMS'


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
    visibleFilms: []
}

    



export default function reducer(state = ReducerRecord, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_FILM:
            return Object.assign({}, state, {
                filmList: payload
            })
        case HANLDE_ASCENDING:
            return Object.assign({}, state, {
                filmList: [...payload]
            })
        case HANDLE_DISCENDING:
            return Object.assign({}, state, {
                filmList: payload
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
        default:
            return state
    }
}

//export const stateSelector = state => state[moduleName]
export const filmListSelector = state => state.filmList
export const filmCheckSelector = state => state.checkedLines
export const filmVisibleSelector = state => state.visibleFilms
export const tempSelector = state => state.temp

export const addFilm = (film, state) => ({
    
        type: ADD_FILM,
        payload: [...state, {id: state.length + 1, ...film, isChecked: false}]
    
})


export const handleAscending = fieldName => (dispatch, getState) => {
    dispatch({
        type: HANLDE_ASCENDING,
        payload: getState().filmList.sort((a, b) => {
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
        payload: getState().filmList.sort((a, b) => {
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

const hello = () => {
    console.log('hello')
}

 export const handleCheckLine = lineId => (dispatch, getState) => {
    const currentIndex = getState().checkedLines.indexOf(lineId)
    let prevData = getState().checkedLines
    let changeData = getState().changeTempTableData
    if (currentIndex === -1) {
        prevData = [...prevData, lineId]
        let filmData = getState().filmList
        changeData = [...changeData, filmData.filter(f => f.id === lineId)]
      } else {
        prevData = prevData.filter(f => f !== lineId)
        changeData = changeData.filter(f => f.id !== lineId)
      }
    console.log(getState().changeTempTableData)
    dispatch({
        type: HANDLE_CHANGE_LINE,
        payload: {checkedLines: prevData, changeTempTableData: changeData}
    })
  }

//   const deleteChangeData = (lineId) => (dispatch, getState) => {
//     let changeData = getState().changeTempTableData
//     changeData = changeData.filter(f => f.id !== lineId)
//     dispatch({
//         type: HANDLE_CHANGE_LINE,
//         payload: changeData
//     })
//   }

//   const addChangeData = (lineId) => (dispatch, getState) => {
//     let changeData = getState().changeTempTableData
//     let filmData = getState().filmList
//     changeData = [...changeData, filmData.filter(f => f.id === lineId)]
//     dispatch({
//         type: HANDLE_CHANGE_LINE,
//         payload: changeData
//     })
//   }

  export const onRemoveLines = () => (dispatch, getState) => {
    let changeData = getState().checkedLines
    let filmData = getState().filmList
    filmData = filmData.filter(f => !changeData.includes(f.id))

    dispatch({
        type: HANDLE_DELETE_FILM,
        payload: filmData
    })
  }


  export const changeTemp = temps => (dispatch, getState) => {
      console.log(temps)
    dispatch({
        type: HANDLE_CHANGE_TEMP,
        payload: temps
    })
}

export const searchFilms = (temp) => (dispatch, getState) => {
    
    const table = getState().filmList
    if (temp.length === 0) {
        
    }

    const newTable = table.filter(film => film.name.toLowerCase().includes(temp.toLowerCase()) 
        // film.description.toLowerCase().includes(temp.toLowerCase()) ||
        // film.genre.toLowerCase().includes(temp.toLowerCase()) ||
        // film.rating.toLowerCase().includes(temp.toLowerCase())
    )
    dispatch({
        type: HANDLE_VISIBLE_FILMS,
        payload: newTable
    })
}

//export const visibleFilms = searchFilms()