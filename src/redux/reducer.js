import { reducer as formReducer } from 'redux-form'
import filmTableReducer, { moduleName as tableReducer} from '../models/currency'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from '../history'

const createRootReducer = combineReducers({
  router: connectRouter(history),
  [tableReducer]: filmTableReducer,
  form: formReducer,
})

export default createRootReducer

