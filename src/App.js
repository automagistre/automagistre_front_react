import React, { Component } from 'react';
import './App.less';
import Layout from './components/Service/hoc/Layout/Layout';
import FirstPage from "./components/Service/containers/FirstPage/FirstPage";
import {Redirect, Route, Switch} from 'react-router-dom'
import ValidComponent from "./components/Service/hoc/ValidComponent/ValidComponent";


class App extends Component {
  componentDidMount() {
    document.getElementById('root').classList.add('site-wrapper')
    // document.body.classList.add('no-start-animations')
  }

  render() {
    return (
        <Layout >
          <Switch>
            <Route path="/" exact   component={FirstPage}/>
            <Route path="/:serviceType/:manufacture" render={props => <ValidComponent {...props}/>}/>
            <Redirect to='/'/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
