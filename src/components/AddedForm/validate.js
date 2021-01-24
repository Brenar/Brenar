export const required = value => value ? undefined : 'Required'

const maxLength = max => value => 
  value && value.length > max ? `Must be ${max} characters or less` : undefined


export const maxLength10 = maxLength(10)

export const onlyNum = value =>  
    value && isNaN(value) && value < 0 && value > 10 ? 'Only number from 0 to 10' : undefined
