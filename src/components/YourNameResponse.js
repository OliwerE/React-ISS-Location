import React from 'react'
import './your-name-response.css'

const YourNameResponse = ({ textBeforeName, name, textAfterName, childComponents }) => {
  return (
    <div id="your-name-response">
      <div id="message">
        <h1>{textBeforeName + name + textAfterName}</h1>
      </div>
      <div id="child-components">
        {childComponents && childComponents.map((ChildComponent, i) => {
          return <ChildComponent key={i} />
        })}
      </div>
    </div>
  )
}

export default YourNameResponse
