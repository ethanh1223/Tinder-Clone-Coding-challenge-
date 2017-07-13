import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import ProfileViewer from './ProfileViewer.js';
import ChatContainer from './ChatContainer.js';

import { switchTab } from '../Actions/index.js';
import { SWIPE, CHAT } from '../Reducers/currentTabReducer.js';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e) {
    this.props.switchTab(e.target.innerText)
  }

  render() {
    return (
      <Tabs value={this.props.currentTab}>
        <Tab onClick={this.handleTabClick} label={SWIPE} value={SWIPE}>
          <h2 style={styles.headline}>Swipe</h2>
          <ProfileViewer handleTabClick={this.handleTabClick} />
        </Tab>

        <Tab onClick={this.handleTabClick} label={CHAT} value={CHAT}>
          <div>
            <h2 style={styles.headline}>Chat</h2>
              <ChatContainer matchedUsers={this.props.matchedUsers} />
          </div>
        </Tab>
      </Tabs>
    )
  }
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