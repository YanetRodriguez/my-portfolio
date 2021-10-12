import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
    <Particles className = "particles-canvas" 
      params = {{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
            width: 6,
            color: "#fff"
            }
          }
        }
      }}/>
    <NavBar/>
    <Header/>
    </>
  );
}

export default App;
