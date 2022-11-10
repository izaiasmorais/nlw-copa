import { Icon, VStack } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Octicons } from "@expo/vector-icons";

export function Polls() {
  return (
    <VStack bg="gray.900" flex={1}>
      <Header title="Meus bolões" />
      <VStack mt="6" mx="5" borderBottomWidth="1" pb="6" mb="4">
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
        />
      </VStack>
    </VStack>
  );
}
