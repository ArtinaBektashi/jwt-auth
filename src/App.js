import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route path='/register' component={RegisterForm} />

    </Switch>
   </Router>
  );
}

export default App;
