import React from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {required, maxLength10, onlyNum} from './validate'

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
  const {filmList, addFilm, formData} = props
  return <form onSubmit={(event) => {
    event.preventDefault()
    addFilm(formData.values, filmList)
  }}>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component={renderField} type="text" validate={[ required, maxLength10 ]}/>
    </div>
    <div>
      <label htmlFor="desc">Desc</label>
      <Field name="desc" component={renderField} type="text" validate={[ required, maxLength10 ]}/>
    </div>
    <div>
      <label htmlFor="genre">Genre</label>
      <Field name="genre" component={renderField} type="text" validate={[ required, maxLength10 ]}/>
    </div>
    <div>
      <label htmlFor="rating">Rating</label>
      <Field name="rating" component={renderField} type="text" validate={[ required, maxLength10, onlyNum ]}/>
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
