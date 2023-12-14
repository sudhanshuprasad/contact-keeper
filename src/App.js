import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { ContactPage } from './pages/ContactPage';
import React, { useContext, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';


export const TokenContext = React.createContext(null);

const ProtectedRoute = ({ element }) => {
  console.log("testing protected route ")
  const [token] = useContext(TokenContext);
  const navigate = useNavigate();
  return token ? element() : navigate("/login");;
};

function App() {
  const [token, setToken] = useState(null);

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <TokenContext.Provider value={[token, setToken]}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<ContactPage/>}/>
          {/* <Route path="/" element={<ProtectedRoute element={ContactPage} />}/> */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </QueryClientProvider>
      </TokenContext.Provider>
    </div>
  );
}

export default App;