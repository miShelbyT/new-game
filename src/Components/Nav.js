import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Button } from 'semantic-ui-react'


function Nav() {

  const [renderBtn, setRenderBtn] = useState(true)

  function handleClick() {
    return setRenderBtn(!renderBtn)
  }

  return (
    <div className="nav">
      <Header as='h2' icon textAlign='center' color='yellow'>
        <Link to='/home' onClick={handleClick}>
          <Icon name='gem' color='blue' />
          <p style={{color: "light-blue"}}>(⬆ for more info, click me ⬆)</p>
        </Link>
        <Header.Content>Welcome To New/Improved Tic Tac Toe!</Header.Content>
      </Header>
      {renderBtn ? <Button as={Link} to='/play' inverted color='violet' onClick={handleClick}>
        Click Here To Begin
      </Button> : null}
    </div>
  )

}


export default Nav