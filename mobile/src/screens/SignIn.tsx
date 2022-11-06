import { Text, Center, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

export function SignIn() {
  return (
    <Center bgColor="black" flex={1} p={7}>
      <Logo width={212} height={40} />
      <Button
        title="ENTRAR COM GOOGLE"
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
      />
      <Text color="gray.200" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação
        de sua conta.
      </Text>
    </Center>
  );
}
