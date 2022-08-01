import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Freelance from "./Freelance/Freelance";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
     < Header/>
        <Main/>
        <Skills/>
        <MyProjects/>
        <Freelance/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
