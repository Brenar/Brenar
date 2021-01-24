import React from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import validate, {required, maxLength10, onlyNum} from './validate'

import {
  filmListSelector,
  addFilm
} from '../../models/currency'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

let AddedForm = (props) => {
  const {filmList, addFilm, formData, reset, pristine, submitting, handleSubmit} = props

  const submit = () => {
    addFilm(formData.values, filmList)
  }

  return <form onSubmit={handleSubmit(submit)}>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component={renderField} type="text"/>
    </div>
    <div>
      <label htmlFor="desc">Desc</label>
      <Field name="desc" component={renderField} type="text" />
    </div>
    <div>
      <label htmlFor="genre">Genre</label>
      <Field name="genre" component={renderField} type="text" />
    </div>
    <div>
      <label htmlFor="rating">Rating</label>
      <Field name="rating" component={renderField} type="text" />
    </div>
    <button type="submit" disabled={submitting}>Submit</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
  </form>
}

AddedForm = reduxForm({
  form: 'example',
  validate
})(AddedForm)

AddedForm = connect(
  state => ({
    filmList: filmListSelector(state),
    formData: state.form.example,
  }), {addFilm}
)(AddedForm)

export default AddedForm
