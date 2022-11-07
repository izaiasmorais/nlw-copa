import { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

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
  const [isUserLoagin, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "1039173558590-mt86svh3dpn5gkktendee130b7abfnoi.apps.googleusercontent.com",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"],
  });

  async function signIn() {
    setIsUserLoading(true);
    await promptAsync();
    try {
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

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
