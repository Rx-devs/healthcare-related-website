import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
