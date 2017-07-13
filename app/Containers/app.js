import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import ProfileViewer from './ProfileViewer.js';
import ChatContainer from '../Components/ChatContainer.js';

import { switchTab } from '../Actions/index.js';
import { SWIPE, CHAT } from '../Reducers/currentTabReducer.js';

//App container -- use MaterialUI tabs to render Swipe and Chat views

//Stateless React Component
//Redux Container (DOES need to know app-level state)

const App = (props) => {

  const handleTabClick = (e) => {
    props.switchTab(e.target.innerText)
  }

  return (
    <Tabs value={props.currentTab}>
      <Tab onClick={handleTabClick.bind(this)} label={SWIPE} value={SWIPE}>
        <h2 className='tabHeadline'>Swipe</h2>
        <ProfileViewer handleTabClick={handleTabClick.bind(this)} />
      </Tab>

      <Tab onClick={handleTabClick.bind(this)} label={CHAT} value={CHAT}>
        <div>
          <h2 className='tabHeadline'>Chat</h2>
            <ChatContainer matchedUsers={props.matchedUsers} />
        </div>
      </Tab>
    </Tabs>
  )
}

function mapStateToProps(state) {
  return {
    currentTab: state.currentTab,
    matchedUsers: state.matchedUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({switchTab}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);