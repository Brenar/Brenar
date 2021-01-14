import React from "react"
import AppHeader from '../app-header'
import AddForm from '../app-add-form'
import FilmList from '../film-list'
import AppFooter from '../app-footer'
import {
  Switch,
  Route
} from "react-router-dom";

import Tab from '../Tabs'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*<AppHeader/>*/}
          <Tab routes={[
            {route: 'table', component: FilmList},
            {route: 'form', component: AddForm},
            {route: 'footer', component: AppFooter}]
          }/>
          {/*<Switch>*/}
          {/*  <Route path="/table" render={() => <>*/}
          {/*    <FilmList/>*/}
          {/*    <AppFooter/>*/}
          {/*  </>}/>*/}
          {/*  <Route path="/form" render={() => <AddForm/>}/>*/}
          {/*</Switch>*/}
        </div>
        <div>
        </div>
      </header>
    </div>
  )
}

export default App