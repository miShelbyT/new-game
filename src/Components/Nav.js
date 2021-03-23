import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Button } from 'semantic-ui-react'


function Nav() {

  const [button, setButton] = useState()
  const [clicked, setClicked] = useState(false)

  return (
    <div className="nav">
      <Header as='h2' icon textAlign='center' color='yellow'>
        <Link to='/home'>
          <Icon name='gem' color='blue' />
        </Link>
        <Header.Content>Welcome To The Mintbean-Inspired (Not-A-Puzzle) Game!</Header.Content>
      </Header>
      <Button as={Link} to='/play' inverted color='violet' >
        Click Here To Begin!
      </Button>
    </div>
  )

}


export default Nav