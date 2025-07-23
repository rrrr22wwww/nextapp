"use client"

import { createContext, useState } from 'react';
interface UserContextType {
  user: { name: string };
}
// Создаем контекст
export const UserContext = createContext<UserContextType | undefined | null>(undefined);

// Создаем сам провайдер с логикой
export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ name: 'Guest' });

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
}

