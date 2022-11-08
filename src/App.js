import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return(
  <div>
      <h1>This is home page</h1>
      <Link to="/about">Click to view our about page</Link>
      <br/>
      <Link to="/contact">Click to view our contact page</Link>
    </div>
  )
}

const Contact = () => {
  return(
    <div>
      <h1>This is contact page</h1>
      <Link to="/">Click to view our home page</Link>
      <br/>
      <Link to="/about">Click to view our about page</Link>
    </div>
    )
}

const About = () => {
  let location = useLocation();
  let { from, pathname } = location;
  return(
    <div>
      <h1>This is about page</h1>
      <Link to="/">Click to view our home page</Link>
      <br/>
      <Link to="/contact">Click to view our contact page</Link>
      <div>You are currently at {pathname}.</div>
    </div>
    )
}

function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default App;
