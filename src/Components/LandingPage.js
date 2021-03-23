import React from 'react'
import { Image, Segment, Header, Button, Icon } from 'semantic-ui-react'


function LandingPage() {

  return (
    <div className="landing">
      <Segment textAlign='center'>
        <Header as='h3' style={{margin: 10}}>Welcome To My First Ever Little Game App: 💎/🧁 Tic Tac Toe (Xs and Os are so 2010)!</Header>
        <Header as='h5' style={{margin: 10}}>This app is tic tac toe but cuter, if I do say so myself. Click on the purple button to begin ⬆️  <br></br>  I hope you enjoy it!</Header>
        <Image src='https://i.imgur.com/viODzIG.png' alt="tic tac toe board" size='medium' className='game-image' />
      </Segment>
      <Segment.Group horizontal>
        <Segment>
          <Image src='https://i.imgur.com/xqi8kEP.jpg' alt="shelby" size='large' rounded />
        </Segment>
        <Segment>
          <Header as='h3' style={{margin: 10}}>About Me:</Header>
          <Header as='h3'style={{margin: 10}}>
            Previously a professional actor, reinventing myself. Recently graduated as a full stack software engineer from NYC's Flatiron School! <br></br><br></br> This is my first project since completing my bootcamp program, my first game build and my first submission to Mintbean's or any hackathon and I am very happy just to show up. 😉 <br></br><br></br>Find me here:
          <Button color='linkedin' href='https://www.linkedin.com/in/shelby-talbert' style={{margin: 10}}>
            <Icon name='linkedin' /> LinkedIn
        </Button>
          <Button color='green' href='https://github.com/miShelbyT'>Github</Button>
          </Header>
        </Segment>
      </Segment.Group>
      <Segment className='credits'>
      <Image src='https://i.imgur.com/MU9nmMm.png' alt="reactjs" size='tiny' circular/>
      <Image src='https://i.imgur.com/OdFNPwz.png' alt="semantic ui-r act" size='tiny' circular/>
      <Image src='https://i.imgur.com/cpid3VZ.png' alt="mintbean" style={{marginRight: 20}} size='tiny' circular/>
      <Header as='h5' style={{marginTop: 10}}>This project was created with Reactjs & Semantic UI and riffed off of a reactjs tic tac toe tutorial plus additional functionality, and using functional components & hooks.  <br></br><br></br>
      Thanks so much to everyone at <a href='mintbean.io'>Mintbean.io</a> for putting this event together. I learned so much and had a lot of fun on this project! </Header>
      </Segment>
    </div>
  )

}


export default LandingPage