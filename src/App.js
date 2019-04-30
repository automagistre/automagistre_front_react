import React, { Component } from 'react';
import './App.less';
import Layout from './components/Service/hoc/Layout/Layout';
import FirstPage from "./components/Service/containers/FirstPage/FirstPage";
import {Route, Switch} from 'react-router-dom'
import Service from "./components/Service/Service";

class App extends Component {
  componentDidMount() {
    document.getElementById('root').classList.add('site-wrapper')
    // document.body.classList.add('no-start-animations')
  }

  render() {
    return (
        <Layout >
          <Switch>
            <Route path="/service/:manufacture/" component={Service}/>
            <Route path="/" exact component={FirstPage}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
