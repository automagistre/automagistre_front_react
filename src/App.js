import React, { Component } from 'react';
import './App.less';
import Layout from './components/Service/hoc/Layout/Layout';
import FirstPage from "./components/Service/hoc/FirstPage/Layout";

class App extends Component {
  componentDidMount() {
    document.getElementById('root').classList.add('site-wrapper')
    // document.body.classList.add('no-start-animations')
  }

  render() {
    return (
        <FirstPage >
        </FirstPage>
    );
  }
}

export default App;
