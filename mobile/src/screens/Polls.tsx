import { Icon, VStack, Text } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Polls() {
  const { navigate } = useNavigation();

  return (
    <VStack bg="gray.900" flex={1}>
      <Header title="Meus bolões" />
      <VStack mt="6" mx="5" borderBottomWidth="1" pb="6" mb="4">
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigate("find")}
        />
        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} py={4}>
          Você ainda não está participando de {"\n"} nenhum bolão, que tal{" "}
          <Text color="yellow.500">buscar um por código</Text> {"\n"}
          ou <Text color="yellow.500">criar um novo?</Text>
        </Text>
      </VStack>
    </VStack>
  );
}
