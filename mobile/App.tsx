import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Loading } from "./src/components/Loading";
import { AuthCOntextProvider } from "./src/contexts/AuthContext";
import { SignIn } from "./src/screens/SignIn";
import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts([
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  ]);

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthCOntextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <SignIn /> : <Loading />}
      </AuthCOntextProvider>
    </NativeBaseProvider>
  );
}
