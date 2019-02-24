import React, { Component } from 'react';
import './App.css';
import Layout from './components/Service/hoc/Layout';

class App extends Component {
  componentDidMount() {
    document.getElementById('root').classList.add('site-wrapper')
    // document.body.classList.add('no-start-animations')
  }

  render() {
    return (
        <Layout>
        </Layout>
    );
  }
}

export default App;
