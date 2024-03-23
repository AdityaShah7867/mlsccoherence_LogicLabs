import React, { createContext, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

const AuthProvider: React.FC = ({ children: child }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // Logic for login
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Logic for logout
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={isAuthenticated, login, logout}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };