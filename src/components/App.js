import React from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';
import { ProtectedRoute } from '../protected.route';
import Contact from './Contact';
import CreateForm from './CreateForm';
import Header from './Header';
import Info from './Info';
import ListJogs from './ListJogs';
import LogIn from './LogIn';
import NotFound from './NotFoundJogs';


const App = () => {
    return (
      <div className="App">
            <Header />
            <Switch>
                <ProtectedRoute path="/" exact component={ListJogs} />
                <ProtectedRoute path="/info" exact component={Info} />
                <ProtectedRoute path="/contact" exact component={Contact} />
                <ProtectedRoute path="/post-jog" exact component={CreateForm} />
                <ProtectedRoute path="/empty-list" exact component={NotFound} />
                <Route path="/login" exact component={LogIn} />
                <Route path="*" component={()=> 'THIS PAGE NOT FOUND'} />
            </Switch> 
      </div>
    );
}

export default App;
