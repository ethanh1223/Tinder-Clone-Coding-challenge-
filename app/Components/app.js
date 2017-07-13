import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


class App extends React.Component {

  render() {
    return (
      <Tabs>
        <Tab label="Swipe" >
          <div>
            Cool
          </div>
        </Tab>
        <Tab label="Item Two" >
          <div>
            <h2 style={styles.headline}>Tab Two</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab
          label="onActive"
          data-route="/home"
          // onActive={handleActive}
        >
          <div>
            <h2 style={styles.headline}>Tab Three</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    )
  }
}

export default App;