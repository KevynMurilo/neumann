import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Calculate from './components/Calculate';
import Gallery from './components/Pictures';
import Questions from './components/Questions';
import Footer from './components/Footer';
import IsOver18 from './components/IsOver18';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Products/>
      <Calculate/>
      <Gallery/>
      <Questions/>
      <Footer/>

      <IsOver18/>
    </div>
  );
}

export default App;
