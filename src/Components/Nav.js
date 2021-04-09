import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Button } from 'semantic-ui-react'


function Nav() {

  return (
    <div className="nav">
      <Header as='h2' icon textAlign='center' color='yellow'>
        <Link to='/home'>
          <Icon name='gem' color='blue' />
          <p style={{color: "light-blue"}}>(⬆ for more info, click me ⬆)</p>
        </Link>
        <Header.Content>Welcome To The Mintbean-Inspired Board Game!</Header.Content>
      </Header>
      <Button as={Link} to='/play' inverted color='violet' >
        Click Here To Begin!
      </Button>
    </div>
  )

}


export default Nav