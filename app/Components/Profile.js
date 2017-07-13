import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import RejectIcon from 'material-ui/svg-icons/navigation/close';
import {green500, red500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


//NEED TO CHANGE TO STATELESS (FUNCTIONAL) COMPONENT

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  
  //Use Material UI to build out user profile
  render() {

    const actions = [
      <FlatButton
        label="Keep Swiping"
        primary={true}
        onClick={this.props.handleNotificationCloseSwipe}
      />,
      <FlatButton
        label="Go to Chat"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleNotificationCloseChat}
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
              src={this.props.user.photo} 
              alt=""
              style={{
                //As needed
              }} />
          </CardMedia>
          <CardTitle title={this.props.user.name} subtitle={this.props.user.location} />
          <CardText>
            {this.props.user.personalInfo}
          </CardText>
          <CardActions>
            <RaisedButton onClick={this.props.swipeLeft} icon={<RejectIcon color={red500} />} label="PASS" />
            <RaisedButton onClick={this.props.swipeRight} icon={<CheckIcon color={green500} />} label="LIKE" />
          </CardActions>
        </Card>
        <Dialog
          title="You've got a match!"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleNotificationClose}
        >
          You and this user have both "liked" each other. You may continue swiping or go chat with your new match!
      </Dialog>
      </div>
    )
  }
}