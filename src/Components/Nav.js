import React from 'react'
import { Header, Icon, Divider } from 'semantic-ui-react'

function Nav() {

  return (
    <>
    <Header as='h2' icon textAlign='center' >
      <Icon name='gem' circular color='red' />
      <Header.Content>Welcome To The Mintbean Inspired Puzzle Game!</Header.Content>
    </Header>
    <Divider />
  </>
  )

}


export default Nav