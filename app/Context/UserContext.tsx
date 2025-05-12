import React, { createContext, useContext, useState } from "react";

type UserContextType = {
    apodo: string;
    setApodo: (name: string) => void;
    emocionSeleccionada: string | null;
    setEmocionSeleccionada: (emocion: string | null) => void;
    descripcionEmocion: string;
    setDescripcionEmocion: (texto: string) => void;
};

const UserContext = createContext<UserContextType>({
    apodo: '',
    setApodo: () => {},
    emocionSeleccionada: null,
    setEmocionSeleccionada: () => {},
    descripcionEmocion: '',
    setDescripcionEmocion: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [apodo, setApodo] = useState('');
    const [ emocionSeleccionada, setEmocionSeleccionada] = useState<string | null>(null);
    const [descripcionEmocion, setDescripcionEmocion] = useState('');

    return (
        <UserContext.Provider value={{ 
            apodo, 
            setApodo, 
            emocionSeleccionada, 
            setEmocionSeleccionada, 
            descripcionEmocion,
            setDescripcionEmocion,
            }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);