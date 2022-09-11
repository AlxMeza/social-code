import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Route } from 'wouter'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <div className="App-bg">
      <Route component={Home} path='/' />
      <Route component={Profile} path='/profile' />
    </div>
  );
}

export default App;
