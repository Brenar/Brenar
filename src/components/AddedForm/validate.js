export const required = value => value ? undefined : 'Required'

const maxLength = max => value => 
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength10 = maxLength(10)

export const onlyNum = value =>  
    value && isNaN(value) && value < 0 && value > 10 ? 'Only number from 0 to 10' : undefined

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (maxLength(10)) {
    errors.name = maxLength(10)
  }
  if (!values.desc) {
    errors.desc = 'Required'
  } else if (maxLength(20)) {
    errors.desc = maxLength(20)
  }

  if (!values.genre) {
    errors.genre = 'Required'
  }

  if (!values.rating) {
    errors.rating = 'Required'
  } else if (isNaN(Number(values.rating))) {
    errors.rating = 'Must be a number'
  } else if (Number(values.rating) > 10 && Number(values.rating) > 0) {
    errors.rating = 'Sorry, you must be at least 10 and more 0'
  }
  return errors
}

export default validate