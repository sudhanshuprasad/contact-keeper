import logo from './logo.svg';
import './App.css';
import Contacts from './components/ContactsList.js';
import Navbar from './components/Navbar.js';
import Create from './components/Create.js';
import Edit from './components/Edit.js';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
    </div>
  );
}

export default App;
