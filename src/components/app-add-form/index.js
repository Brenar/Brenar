import {connect} from 'react-redux'

import {
  currencyListSelector,
  addFilm
} from '../../models/currency'

import AddForm from './app-add-form';

export default connect(state => ({
  currencyList: currencyListSelector(state)
}), {addFilm})(AddForm);

