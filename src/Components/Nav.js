import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

function Nav() {

  return (
    <div className="nav">
    <Header as='h2' icon textAlign='center' color='yellow'>
      <Icon name='gem' color='blue' />
      <Header.Content>Welcome To The Mintbean-Inspired (Not-A-Puzzle) Game!</Header.Content>
    </Header>
  </div>
  )

}


export default Nav