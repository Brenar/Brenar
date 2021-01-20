import React from "react"
import AddedForm from '../AddedForm'
import Table from '../table'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tab from '../Tabs'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*<Tab routes={[*/}
          {/*  {route: 'table', component: FilmList},*/}
          {/*  {route: 'form', component: AddForm},*/}
          {/*  {route: 'footer', component: AppFooter}]*/}
          {/*}/> */}
          <Link to={'/table'}>To filmTable</Link>
          <Link to={'/form'}>To Form</Link>
          <Switch>
            <Route path="/table" component={Table}/>
            <Route path="/form" component={AddedForm}/>
          </Switch>
        </div>
        <div>
        </div>
      </header>
    </div>
  )
}

export default App