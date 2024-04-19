
import './App.css';


import {BrowserRouter,Switch,Route ,Redirect} from 'react-router-dom'

import Profile from './Profile/Profile'

import Contact from './Contact/Contact'

import Education from './Education/Education'

import Gallery from './Gallery/Gallery'

import NothingFound from './NothingFound/NothingFound'


function App() {
  return (
<div>
<BrowserRouter>
<Switch>
  <Route exact path="/" component={Profile}/>
  <Route exact path="/Contact" component={Contact}/>
  <Route exact path="/Education" component={Education}/>
  <Route exact path="/Gallery" component={Gallery}/>
  <Route exact path="/NothingFound" component={NothingFound}/>
  <Redirect to="/NothingFound"/>
  </Switch>
  </BrowserRouter>
</div>
  
  


  );
}

export default App;

