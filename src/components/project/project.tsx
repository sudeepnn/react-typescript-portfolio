import React from 'react'
import Card from '../card/card'
import '../project/project.css'
import collage from '../../resources/collage.png'
import chat from '../../resources/chat.png'
import drum from '../../resources/drum.png'

const project = () => {
  return (
    <div className="project">
        <Card image={collage} url='https://sudeepnn.github.io/belife/' />
        <Card image={chat} url='https://sudeepnn.github.io/chat_angel/'/>
        <Card image={drum} url='https://sudeepnn.github.io/drumset/' />

    </div>
  )
}

export default project