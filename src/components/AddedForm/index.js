import React from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import validate from './validate'

import {
  filmListSelector,
  addFilm
} from '../../models/currency'

let AddedForm = (props) => {
  const {filmList, addFilm, formData} = props

  return <form onSubmit={(event) => {
    event.preventDefault()
    addFilm(formData.values, filmList)
  }}>
    <div>
      <label htmlFor="name"> Name</label>
      <Field name="name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="desc">Desc</label>
      <Field name="desc" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="genre">Genre</label>
      <Field name="genre" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="rating">Rating</label>
      <Field name="rating" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>
}

AddedForm = reduxForm({
  form: 'example',
})(AddedForm)

AddedForm = connect(
  state => ({
    filmList: filmListSelector(state),
    formData: state.form.example,
  }), {addFilm}
)(AddedForm)

export default AddedForm
