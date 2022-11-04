import { StatusBar } from "expo-status-bar";
import { Text, Center } from "native-base";

export function SignIn() {
  return (
    <Center bgColor="black" flex={1}>
      <Text color="white">Hellow world!</Text>
      <StatusBar style="auto" />
    </Center>
  );
}
