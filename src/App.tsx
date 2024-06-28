
import './App.css';
import Header from './Components/header';
import About from './Components/about';
import Resume from './Components/resume';
import Portfolio from './Components/portfolio';
import Contactus from './Components/contactus';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
