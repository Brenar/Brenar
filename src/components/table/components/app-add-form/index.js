import {connect} from 'react-redux'

import {
  filmListSelector,
  addFilm
} from '../../../../models/currency'

import AddForm from './app-add-form';

export default connect(state => ({
  filmList: filmListSelector(state)
}), {addFilm})(AddForm);

