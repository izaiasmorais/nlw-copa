import { Icon, VStack, Text, useToast, FlatList } from "native-base";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Octicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { useCallback, useEffect, useState } from "react";
import { PollCard, PollProps } from "../components/PollCard";
import { EmptyPollList } from "../components/EmptyPollList";
import { Loading } from "../components/Loading";

export function Polls() {
  const [isLoading, setIsLoading] = useState(false);
  const [polls, setPolls] = useState<PollProps[]>([]);
  const { navigate } = useNavigation();
  const toast = useToast();

  async function getPolls() {
    try {
      setIsLoading(true);
      const response = await api.get("/polls");
      setPolls(response.data.polls);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Não foi possível exibir os bolões!",
        placement: "top",
        bgColor: "green.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getPolls();
    }, [])
  );

  return (
    <VStack bg="gray.900" flex={1}>
      <Header title="Meus bolões" />

      <VStack
        borderBottomColor="gray.600"
        borderBottomWidth={1}
        mt={6}
        mx={5}
        pb={4}
        mb={4}
      >
        <Button
          title="BUSCAR BOLÃO POR CÓDIGO"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigate("find")}
        />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          mb={50}
          data={polls}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PollCard
              data={item}
              onPress={() => navigate("details", { id: item.id })}
            />
          )}
          ListEmptyComponent={<EmptyPollList />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 50 }}
          px={5}
        />
      )}
    </VStack>
  );
}
