import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';

// import { useEffect } from 'react';

let name = "Maheboob Pasha";



function App() {

  const [StyleMode, setStyleMode] = useState('light');

  const [btnText, setBtnText] = useState('Dark');

  const [alert, setalert] = useState(null);

  // call showAlert('success', 'Saved successfully') from children
  const showAlert = (type, message) => {
    setalert({ type, message });

    // optional: clear alert after 3 seconds
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  let toggleMode = (() => {
    if (StyleMode === 'dark') {
      setStyleMode('light')
      setBtnText('dark')
    } else {
      setStyleMode('dark')
      setBtnText('light')
    }
  })

  return (
    <>
      <div className={`app ${StyleMode}`} >
        {/* <Navbar title = "Maheboob Pasha" about = "Contact us" /> */}
        <Navbar mode={StyleMode} btnText={btnText} about={"About Us"} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className={`body body ${StyleMode} `}  >
          <h1>
            Welcome to React JS From {name}
          </h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, rerum! Totam cupiditate ex optio quidem cumque accusamus, exercitationem repellendus magnam reprehenderit est consequatur. Maiores minima animi repudiandae voluptate, reprehenderit earum.
    {/* <Router> */}
          <Routes>
          <Route path="/about" element = {<About mode = {StyleMode}></About>}/>
          
          <Route path="/" element = {<Textform label="Enter the Text" mode={StyleMode} showAlert={showAlert} />}/>
        </Routes>
    {/* </Router> */}
        </div>
        {/* <About mode = {StyleMode}></About> */}
        
        <footer>
          &copy; 2024 All Rights Reserved
        </footer>
      </div>
    </>
  );
}

export default App;
