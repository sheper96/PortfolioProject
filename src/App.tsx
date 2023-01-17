import React, {useEffect, useState} from 'react';
import './App.module.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Freelance from "./Freelance/Freelance";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    const [windowDimension, setWindowDimension] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowDimension(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    const isMobile = windowDimension <= 1050
    return (
        <div>
            <Header/>
            <Main/>
            <Skills isMobile={isMobile}  />
            <MyProjects/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
