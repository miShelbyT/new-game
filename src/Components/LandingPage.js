import React from 'react'
import Nav from './Nav'
import GamePage from './GamePage'
import { Image, Segment, Header } from 'semantic-ui-react'


function LandingPage() {

  return (
    <>
      <Nav />
      <Segment.Group horizontal>
        <Segment>
          <Image src='https://i.imgur.com/xqi8kEP.jpg' size='medium' circular />
        </Segment>
        <Segment>
          <Header as='h2'>About Me:</Header>
          <Header as='h4'>
            Previously a professional actor, reinventing myself. Recently graduated as a full stack software engineer from NYC's Flatiron School! This is my first submission to Mintbean's or any hackathon and I am very happy just to show up. 😉
        </Header>
        </Segment>



      </Segment.Group>


      <GamePage />
    </>
  )

}


export default LandingPage