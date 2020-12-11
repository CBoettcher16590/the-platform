import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';


class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{color: "red"}}>The Articles</h1>
        <p>Look what is featured</p>
        </div>
      );
    }
  }
  class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{backgroundColor: "lightblue"}}>More Articles!</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<MyHeader />, document.getElementById('root'));

  
  import Sidebar from "react-sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default App;