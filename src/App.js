import React, { Component } from 'react';
import './App.less';
import Layout from './components/Service/hoc/Layout/Layout';
import FirstPage from "./components/Service/containers/FirstPage/FirstPage";
import {Redirect, Route, Switch} from 'react-router-dom'
import {services} from "./vars/company";
import Main from "./components/Service/containers/Main/Main";
import {carManufactures} from "./vars/manufactures";


const ValidComponent = props => {
    console.log(props)
    let urlService = '', urlManufacture = '', flag = false
    if (props.match.params.serviceType)
        {urlService = props.match.params.serviceType.toLowerCase()}
    if (props.match.params.manufacture)
        {urlManufacture = props.match.params.manufacture.toLowerCase()}
    for (let manufacture of carManufactures) {
        if (urlManufacture === manufacture.name.toLowerCase()) {
            flag = true
            break
        }
    }
    if (!flag) {
        return <Redirect to='/'/>
    }
    for (let service of services) {
        if (service.link === urlService && service.visible) {
            return (
                <Main {...props}>
                    {service.component(props)}
                </Main>
            )
        }
    }
    return <Redirect to='/'/>
}

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
