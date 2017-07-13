import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

//Create expandable Chat Window component to be rendered for each match.

//Stateful React Component
//NOT Redux container (doesn't need to know app-level state)

export default class ChatWindow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };

  handleToggle(event, toggle) {
    this.setState({expanded: toggle});
  };

  handleExpand() {
    this.setState({expanded: true});
  };

  handleReduce() {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.user.name}
          subtitle={this.props.user.location}
          avatar={this.props.user.photo}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Conversation" expandable={true} />
        <CardText expandable={true}>
          (This is where the conversation between matches would be.)
        </CardText>
        <CardActions expandable={true}>
          <FlatButton label="Close" onClick={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}