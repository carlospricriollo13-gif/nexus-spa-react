import { createContext, useContext, useEffect, useState } from 'react';
import { login as apiLogin } from '../services/mockApi.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const stored = localStorage.getItem('nexus-user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('nexus-user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('nexus-user');
    }
  }, [currentUser]);

  async function signIn(email, password) {
    const loggedUser = await apiLogin(email, password);
    setCurrentUser(loggedUser);
    return Boolean(loggedUser);
  }

  function signOut() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ currentUser, isAuthenticated: Boolean(currentUser), signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
