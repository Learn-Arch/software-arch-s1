import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';
import { api } from '../utils/api';
import '../index.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res);
            setToken(jwt);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('jwt');
        });
    }
  }, []);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem('jwt');
  };

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('jwt', token);
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, token }}>
        <div className="page">
          <Header onSignOut={handleSignOut} isLoggedIn={isLoggedIn} />
          <AppRoutes 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
            onLogin={handleLogin}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App; 