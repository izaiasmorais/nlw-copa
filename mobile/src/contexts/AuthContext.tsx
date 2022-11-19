import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { api } from "../services/api";

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
	isUserLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthCOntextProvider({ children }: AuthContextProviderProps) {
	const [isUserLoading, setIsUserLoading] = useState(false);
	const [user, setUser] = useState<UserProps>({} as UserProps);
	const [request, response, promptAsync] = Google.useAuthRequest({
		clientId:
			"1039173558590-raqfjk3rjf4q3ifcrkgc3ssedq1umi8c.apps.googleusercontent.com",
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

	async function signInWithGoogle(access_token: string) {
		try {
			setIsUserLoading(true);
			const tokenResponse = await api.post("/users", { access_token });
			api.defaults.headers.common[
				"Authorization"
			] = `Bearer ${tokenResponse.data.token}`;

			const userInfoResponse = await api.get("/me");
			setUser(userInfoResponse.data.user);
		} catch (error) {
			console.log(error);
			throw error;
		} finally {
			setIsUserLoading(false);
			console.log(user);
		}
	}

	useEffect(() => {
		if (response?.type === "success" && response.authentication?.accessToken) {
			signInWithGoogle(response.authentication.accessToken);
			console.log(response.authentication.accessToken);
		}
	}, [response]);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				user,
				isUserLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
