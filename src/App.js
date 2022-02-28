import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './components/loginAndReg/Register';
import Login from './components/loginAndReg/Login';
import Dashboard from './components/dashboard/Dashboard';
import MainStepper from './components/forms/MainStepper';
import FormContext from './components/forms/FormContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Register/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/dashboard">
            <Dashboard/>
          </Route>
          
          <FormContext>
          <Route exact path="/forms">
            <MainStepper/>
          </Route>
          </FormContext>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
