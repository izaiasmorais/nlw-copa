import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import { useAuth } from "../contexts/AuthContext";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <Box bg="gray.900" flex={1}>
      <NavigationContainer>
        {user.name ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </Box>
  );
}
