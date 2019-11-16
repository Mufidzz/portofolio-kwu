import React from 'react';
import Index from "./components/pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyNav from './components/layout/navbar'

import 'bootstrap/dist/css/bootstrap.css'
import './components/static/css/self.css'
import {Container} from "react-bootstrap";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MyNav/>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/product" component={this.Maintenance}/>
                        <Route exact path="/service" component={this.Maintenance}/>
                        <Route exact path="/contact" component={this.Maintenance}/>
                    </Switch>
                </div>
            </Router>
        );
    }

    Maintenance = () => (
        <Container>
            <h1 style={{color : "white"}}> Under Maintenance</h1>
        </Container>

    )
}

export default App;
