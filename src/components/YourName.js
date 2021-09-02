import React from 'react'
import './your-name.css'
import YourNameForm from './YourNameForm'

const YourName = () => {
  const handleYourNameFormSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    alert('Welcome back to the Linnaeus University ' + name + '!')
  }

  return (
    <>
    <YourNameForm submitForm={handleYourNameFormSubmit} />
    </>
  )
}

export default YourName
