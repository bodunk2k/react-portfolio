import React, { Component } from 'react';
import Experience from './ExperienceComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, BrowserRouter  as Router } from 'react-router-dom';
import {connect} from 'react-redux';

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <Router >
              <Header />
                <Switch>
                    <Route exact path='/home' render={() => <HomePage/>} />
                    <Route exact path='/experience' render={() => <Experience />} />
                </Switch>
              <Footer />
            </Router>
        );
    }
}
export default connect()(Main);