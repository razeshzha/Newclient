/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false); // 🛡️ Prevent hydration mismatch

  useEffect(() => {
    const token = Cookies.get('access_token');
    const localUser = localStorage.getItem('user');

    if (token) {
      setIsAuthenticated(true);
    }
    if (localUser) {
      setUser(JSON.parse(localUser));
    }

    setMounted(true); // ✅ Ready to render safely
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    Cookies.remove('access_token');
    setIsAuthenticated(false);
  };

  if (!mounted) return null; // 🧯 Prevent early render mismatch

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
