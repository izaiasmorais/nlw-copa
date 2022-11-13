import { useRoute } from "@react-navigation/native";
import { HStack, useToast, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Share } from "react-native";
import { EmptyMyPollList } from "../components/EmptyMyPollList";
import { Guesses } from "../components/Guesses";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Option } from "../components/Option";
import { PollProps } from "../components/PollCard";
import { PollHeader } from "../components/PollHeader";
import { api } from "../services/api";

interface RouteParams {
  id: string;
}

export function Details() {
  const [optionSelected, setOptionSelected] = useState<"guesses" | "ranking">(
    "guesses"
  );
  const [isLoading, setIsLoaging] = useState(false);
  const [pollDetails, setPollDetails] = useState<PollProps>({} as PollProps);

  const route = useRoute();
  const toast = useToast();
  const { id } = route.params as RouteParams;

  async function getPollDetails() {
    try {
      setIsLoaging(true);

      const response = await api.get(`/polls/${id}`);

      setPollDetails(response.data.poll);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Não foi possível encontrar o bolão!",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoaging(false);
    }
  }

  async function handleCodeShare() {
    await Share.share({
      message: pollDetails.code,
    });
  }

  useEffect(() => {
    getPollDetails();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header
        title={pollDetails.title}
        onShare={handleCodeShare}
        showBackButton
        showShareButton
      />
      {pollDetails?._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PollHeader data={pollDetails} />

          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === "guesses"}
              onPress={() => setOptionSelected("guesses")}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === "ranking"}
              onPress={() => setOptionSelected("ranking")}
            />
            <Guesses pollId={pollDetails.id} />
          </HStack>
        </VStack>
      ) : (
        <EmptyMyPollList code={pollDetails.code} />
      )}
    </VStack>
  );
}
