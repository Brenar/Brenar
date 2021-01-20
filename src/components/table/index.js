import AddForm from './components/app-add-form'
import FilmList from './components/film-list'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const Table = () => {
  return <>
      <AppHeader/>
      <AddForm/>
      <FilmList/>
      <AppFooter/>
    </>
}

export default Table