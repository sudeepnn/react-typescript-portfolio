import React from 'react'

import '../card/card.css'
type imageurl={
    url:string
    image:string
}
const card = (props:imageurl) => {
  return (
    <div className="card">
        <img src={props.image}  />
        <a href={props.url}>Visit</a>
    </div>
  )
}

export default card