import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg"></div>
      <div className="container">
        <Navbar title="TextUtils" />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route  path="/">
            <TextForm heading="Enter your text here!" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
