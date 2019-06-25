import React,{Fragment} from 'react'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./components/Header";
import Drawer from './components/Drawer';
import Example from './components/Example'

const App = () => {
    return (
        <Router>
            <Header />
            {/* <Drawer /> */}
            <div className="container-fluid">
                    <Switch>
                        <Route path="/" exact render={()=><div>Dashboard</div>}/>
                        <Route path="/example" component={Example}/>
                    </Switch>
            </div>
        </Router>

    )
}

export default App
