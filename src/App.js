import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './styles/index.scss';

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Menu = lazy(() => import('./pages/Menu'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/menu' component={Menu}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Redirect to='/'/>
                    </Switch>
                    <Footer/>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
