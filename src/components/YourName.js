import React, { useState } from 'react'
import YourNameForm from './YourNameForm'
import YourNameResponse from './YourNameResponse'
import IssLocation from './IssLocation'

const YourName = () => {
  const [hasSubmitName, setHasSubmitName] = useState(false)
  const [name, setName] = useState('')

  const handleYourNameFormSubmit = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    name = name.charAt(0).toUpperCase() + name.slice(1) // Force first char in name to upper case.
    setName(name)
    setHasSubmitName(true)
  }

  const textBeforeName = 'Hello '
  const textAfterName = '!'
  const yourNameResponseChildComponents = [IssLocation]
  return (
    <>
      {hasSubmitName ? <YourNameResponse textBeforeName={textBeforeName} name={name} textAfterName={textAfterName} childComponents={yourNameResponseChildComponents} /> : <YourNameForm submitForm={handleYourNameFormSubmit} />}
    </>
  )
}

export default YourName
