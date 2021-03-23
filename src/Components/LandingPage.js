import React from 'react'
import { Image, Segment, Header, Button, Icon } from 'semantic-ui-react'


function LandingPage() {

  return (
    <div className="landing">
      
      <Segment.Group horizontal>
        <Segment>
          <Image src='https://i.imgur.com/xqi8kEP.jpg' size='large' rounded />
        </Segment>
        <Segment>
          <Header as='h3' style={{margin: 10}}>About Me:</Header>
          <Header as='h3'style={{margin: 10}}>
            Previously a professional actor, reinventing myself. Recently graduated as a full stack software engineer from NYC's Flatiron School! This is my first project since completing my bootcamp program, my first game build (with a little help from Reactjs) and my first submission to Mintbean's or any hackathon and I am very happy just to show up. 😉 <br></br><br></br>Find me here:
          <Button color='linkedin' href='https://www.linkedin.com/in/shelby-talbert-58671a202/' style={{margin: 10}}>
            <Icon name='linkedin' /> LinkedIn
        </Button>
          <Button color='green' href='https://github.com/miShelbyT'>Github</Button>
          </Header>
        </Segment>
      </Segment.Group>
    </div>
  )

}


export default LandingPage