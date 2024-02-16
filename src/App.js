import logo from './logo.svg';
import './App.css';
import NavBar from './assets/components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign from './assets/components/sign/Sign';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sign/> 
    </div>
  );
}

export default App;
