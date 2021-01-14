import React, {useEffect} from "react"
//import './App.css';
import {connect} from 'react-redux'
import AppHeader from '../app-header'
import AddForm from '../app-add-form'
import FilmList from '../film-list'
import AppFooter from '../app-footer'


import {
    currencyListSelector,
    addFilm
} from '../../models/currency'

function App({currencyList}) {

    // useEffect(() => {
    //     initCurrencyList()
    //     return () => {
            
    //     }
    // }, [initCurrencyList])

    const handleSubmit = (data) => {
        console.log(data)
    }

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
}

export default connect(state => ({
        currencyList: currencyListSelector(state)
    }),
    {})(App)

