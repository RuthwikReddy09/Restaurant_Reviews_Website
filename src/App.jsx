import './App.scss';
import "./styles/navbar.scss";
import "./styles/card.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/login.scss";
import "./styles/register.scss";
import "./styles/about.scss";
import "./styles/contact.scss";
import "./styles/restaurant.scss";
import "./styles/add.scss";
import "./styles/logout.scss";
import "./styles/pagenotfound.scss";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Restaurant from './components/Restaurant';
import Add from './components/Add';
import Logout from './components/Logout';
import UserContext from './components/Context';
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user,setUser] = useState("");
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/addReview" element={<Add/>}></Route>
            <Route path="/restaurant/:resto" element={<Restaurant/>}></Route>
            <Route path="/*" element={<PageNotFound/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
      </UserContext.Provider>
  );
}
export default App;
