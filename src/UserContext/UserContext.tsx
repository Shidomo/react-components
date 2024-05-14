import React, { createContext, useState, useMemo, FC } from "react";

interface UserContextType {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string>("");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
