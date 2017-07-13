import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chooseNextSwipeUser, setNextSwipeUser, likeUser } from '../Actions/index.js';

import Profile from '../Components/Profile.js';

class ProfileViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.chooseRandomUser = this.chooseRandomUser.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.swipeLeft = this.swipeLeft.bind(this);
    // this.handleNotificationOpen = this.handleNotificationOpen.bind(this);
    this.handleNotificationClose = this.handleNotificationClose.bind(this);
  }

  componentDidMount() {
    this.chooseRandomUser();
  }

  chooseRandomUser() {
    let randomIndex = Math.floor(Math.random() * this.props.unseenUsers.length);
    let randomUser = this.props.unseenUsers[randomIndex];

    this.props.chooseNextSwipeUser(randomIndex);
    this.props.setNextSwipeUser(randomUser);
    
  }

  handleNotificationOpen() {
    this.setState({open: true});
  }

  handleNotificationClose() {
    this.setState({open: false});
  }

  swipeLeft() {
    this.chooseRandomUser();
  }

  swipeRight() {
    if (this.props.currentSwipeUser.likeMe) {
      this.handleNotificationOpen();
    }
    this.props.likeUser(this.props.currentSwipeUser);
    this.chooseRandomUser();
  }

  render() {
    if (this.props.unseenUsers.length) {
      return (
        <Profile handleNotificationClose={this.handleNotificationClose} open={this.state.open} swipeLeft={this.swipeLeft} swipeRight={this.swipeRight} user={this.props.currentSwipeUser} />
      )
    }
     else return (
      <h2> We've run out of matches in your area! Please try again later. </h2>
    )
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers,
    unseenUsers: state.unseenUsers,
    currentSwipeUser: state.currentSwipeUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ chooseNextSwipeUser, setNextSwipeUser, likeUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileViewer);