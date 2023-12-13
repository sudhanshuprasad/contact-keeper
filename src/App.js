import logo from './logo.svg';
import './App.css';
import Contacts from './components/ContactsList.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
