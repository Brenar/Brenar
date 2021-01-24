import {setItemToLocalStorage} from '../utils'

import {ADD_FILM, HANLDE_ASCENDING, HANDLE_DISCENDING, HANDLE_DELETE_FILM, HANDLE_SAVE_CHANGES} from '../models/currency'
const persistActionsArray = [ADD_FILM, HANLDE_ASCENDING, HANDLE_DISCENDING, HANDLE_DELETE_FILM, HANDLE_SAVE_CHANGES]

export const logger = ({dispatch, getState}) => next => (actionCreator) => {

  console.log('prevState$$$$$$$$$$$$$$', getState())
  console.log('----------------->')
  console.log(actionCreator.type, '^^^^^^^^^^', actionCreator.payload)
  console.log('----------------->')
  console.log(actionCreator.payload)

  return next(actionCreator)
}



export const persistDataToLocalstorage = () => next => ({type, payload}) => {
  if(persistActionsArray.includes(type)){
    if(payload.length){
      setItemToLocalStorage('filmList', payload)
    } else {
      setItemToLocalStorage('filmList', payload.filmData)
    }
  }
  return next({type, payload})
}

