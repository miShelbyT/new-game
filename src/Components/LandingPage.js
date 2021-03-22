import React from 'react'
import Nav from './Nav'
import Game from './Game'
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
            Previously a professional actor, reinventing myself. Recently graduated as a full stack software engineer from NYC's Flatiron School! This is my first game build (with a little help from Reactjs) and my first submission to Mintbean's or any hackathon and I am very happy just to show up. 😉 <br></br>Find me here:
        </Header>
        <a href='https://www.linkedin.com/in/shelby-talbert-58671a202/'>LinkedIn</a>
        <br></br>
        <a href='https://github.com/miShelbyT'>Github</a>
        </Segment>
      </Segment.Group>

      <Game />
    </>
  )

}


export default LandingPage