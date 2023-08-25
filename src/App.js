import './App.css';
// import Footer from './layouts/Footer';
import Navbar from '../src/layouts/Navbar';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "../src/layouts/Navbar";
import FirstPage from './layouts/FirstPage';
import SecondPage from './layouts/SecondPage';
import HowItWorks from './components/HowItWorks';
import Footer from './layouts/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <FirstPage/>
      </div>
      <div>
        <SecondPage/>
      </div>
      <div>
        <HowItWorks/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
    
  );
}

export default App;
