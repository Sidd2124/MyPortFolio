
import './App.css';


import {BrowserRouter,Switch,Route ,Redirect} from 'react-router-dom'

import Profile from './Profile/Profile'

import Contact from './Contact/Contact'

import Education from './Education/Education'

import Experiance from './Experiance/Experiance'

import Projects from './MyProjects/Projects'

import NothingFound from './NothingFound/NothingFound'


function App() {
  return (
<div>
<BrowserRouter>
<Switch>
  <Route exact path="/" component={Profile}/>
  <Route exact path="/Contact" component={Contact}/>
  <Route exact path="/Education" component={Education}/>
  <Route exact path="/Experiance" component={Experiance}/>
  <Route exact path="/Projects" component={Projects}/>
  <Route exact path="/NothingFound" component={NothingFound}/>
  <Redirect to="/NothingFound"/>
  </Switch>
  </BrowserRouter>
</div>
  
  


  );
}

export default App;

