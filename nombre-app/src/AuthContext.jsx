import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // 🔐 LOGIN
    const login = (token) => {
        localStorage.setItem('token', token);

        const payload = JSON.parse(atob(token.split('.')[1]));

        setUser({
            token,
            id: payload.id,
            email: payload.email,
            rol: payload.rol
        });
    };

    // 🔓 LOGOUT
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    // 🔄 RECUPERAR SESIÓN
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));

            setUser({
                token,
                id: payload.id,
                email: payload.email,
                rol: payload.rol
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};