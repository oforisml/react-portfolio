// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router >
       <div className="App"> 
      <Header/>
      
      <Body />
      
      <Footer/>

      </div>  
    </Router>
  );
}

export default App;
