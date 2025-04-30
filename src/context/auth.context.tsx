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
  const [user, setUser] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false); // 🛡️ Prevent hydration mismatch

  useEffect(() => {
    const token = Cookies.get('access_token');
    const localUser = localStorage.getItem('user');

    // Check if there is an access token, if yes, set authentication to true
    if (token) {
      setIsAuthenticated(true);
    }

    // Handle user data stored in localStorage
    if (localUser) {
      try {
        const parsedUser = JSON.parse(localUser);
        if (parsedUser) {
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        setUser(null); // In case of error, reset the user data
      }
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
