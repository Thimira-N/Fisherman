import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
    name: string;
    avatar: string;
    id: string;
    location: string;
    memberSince: string;
}

interface GlobalContextType {
    user: User | null;
    setUser: (user: User) => void;
    refetch: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const refetch = () => {
        // Implement the logic to refetch or reload user data
        // For now, we simulate a refetch
        console.log('Refetching user data...');
    };

    return (
        <GlobalContext.Provider value={{ user, setUser, refetch }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the Global Context
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
