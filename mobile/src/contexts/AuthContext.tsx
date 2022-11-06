import { createContext, ReactNode, useContext } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: UserProps;
  signIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthCOntextProvider({ children }: AuthContextProviderProps) {
  async function signIn() {}

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Izaías Lima",
          avatarUrl: "https://github.com/izaiasmorais.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
