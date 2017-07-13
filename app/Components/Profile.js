import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import RejectIcon from 'material-ui/svg-icons/navigation/close';
import {green500, red500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

//Use Material UI to build out user profile

//Stateless React Component
//NOT Redux container (doesn't need to know app-level state)

const Profile = (props) => {
  
  const actions = [
    <FlatButton
      label="Keep Swiping"
      primary={true}
      onClick={props.handleNotificationCloseSwipe}
    />,
    <FlatButton
      label="Go to Chat"
      primary={true}
      keyboardFocused={true}
      onClick={props.handleNotificationCloseChat}
    />,
  ];

  return (
    <div>
      <Card
        style={{
          maxWidth: '50%',
          margin: '0 auto'
        }}
      >
        <CardMedia>
          <img 
            className='profilePhoto' 
            src={props.user.photo} 
            alt="" />
        </CardMedia>
        <CardTitle title={props.user.name} subtitle={props.user.location} />
        <CardText>
          {props.user.personalInfo}
        </CardText>
        <CardActions>
          <RaisedButton onClick={props.swipeLeft} icon={<RejectIcon color={red500} />} label="PASS" />
          <RaisedButton onClick={props.swipeRight} icon={<CheckIcon color={green500} />} label="LIKE" />
        </CardActions>
      </Card>
      <Dialog
        title="You've got a match!"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.handleNotificationClose}
      >
        You and this user have both "liked" each other. You may continue swiping or go chat with your new match!
    </Dialog>
    </div>
  )
}

export default Profile;