import {createSelector} from 'reselect'

const ADD_FILM = 'ADD_FILM'
const HANLDE_ASCENDING = 'HANLDE_ASCENDING'
const HANDLE_DISCENDING = 'HANDLE_DISCENDING'
const DELETE_FILM = 'DELETE_FILM'
const HANDLE_CHECK_LINE = 'HANDLE_CHECK_LINE'
const HANDLE_CHANGE_TEMP = 'HANDLE_CHANGE_TEMP'


export const ReducerRecord = {
    currencyList: [
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
                currencyList: payload
            })
        case HANLDE_ASCENDING:
            return Object.assign({}, state, {
                currencyList: [...payload]
            })
        case HANDLE_DISCENDING:
            return Object.assign({}, state, {
                currencyList: payload
            })
        case HANDLE_CHECK_LINE:
            return Object.assign({}, state, {
                checkedLines: payload
            })
        case HANDLE_CHANGE_TEMP:
            return Object.assign({}, state, {
                temp: payload
            })
        default:
            return state
    }
}

//export const stateSelector = state => state[moduleName]
export const currencyListSelector = state => state.currencyList
export const currencyCheckSelector = state => state.checkedLines

export const addFilm = (film, state) => ({
    
        type: ADD_FILM,
        payload: [...state, {id: state.length + 1, ...film, isChecked: false}]
    
})


export const handleAscending = fieldName => (dispatch, getState) => {
    dispatch({
        type: HANLDE_ASCENDING,
        payload: getState().currencyList.sort((a, b) => {
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
        payload: getState().currencyList.sort((a, b) => {
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
    const currentIndex = getState().checkedLines.indexOf(lineId)
    let prevData = getState().checkedLines
    if (currentIndex === -1) {
        //[...changeTempTableData].filter(f => f.id !== lineId)
        prevData.push(lineId)
      } else {
        //[...changeTempTableData, ...table.filter(f => f.id === lineId)]
        prevData = prevData.filter(f => f !== lineId)
      }
      console.log(prevData)
    dispatch({
        type: HANDLE_CHECK_LINE,
        payload: prevData
    })


    // setCheckedLines(prevCheckedLines => {
    //   const currentIndex = prevCheckedLines.indexOf(lineId)
    //   if (currentIndex !== -1) {
    //     setChangeTempTableData([...changeTempTableData].filter(f => f.id !== lineId))
    //     return [...prevCheckedLines].filter(f => f !== lineId)
    //   } else {
    //     setChangeTempTableData([...changeTempTableData, ...table.filter(f => f.id === lineId)])
    //     return [...prevCheckedLines, lineId]
    //   }
    // })
  }

  export const changeTemp = temps => (dispatch, getState) => {
    dispatch({
        type: HANDLE_CHANGE_TEMP,
        payload: temps
    })
}