import './App.css';
import Home from './Pages/Home';
import Navbar from "./Pages/Navbar"
import About from "./Pages/About"
import Academics from './Pages/Academics';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Academics />
     {/* <About /> */}
     {/* <Home /> */}
    </div>
  );
}

export default App;
