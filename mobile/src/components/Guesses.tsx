import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { useNotification } from "../hooks/useNotify";
import { api } from "../services/api";
import { EmptyMyPollList } from "./EmptyMyPollList";
import { Game, GameProps } from "./Game";
import { Loading } from "./Loading";

interface Props {
	pollId: string;
	code: string;
}

export function Guesses({ pollId, code }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [games, setGames] = useState<GameProps[]>([]);
	const [firstTeamPoints, setFirstTeamPoints] = useState("");
	const [secondTeamPoints, setSecondTeamPoints] = useState("");
	const { showSuccess, showError } = useNotification();

	async function getGames(id: string) {
		try {
			setIsLoading(true);

			const response = await api.get(`/polls/${id}/games`);

			setGames(response.data.games);
		} catch (error) {
			console.log(error);

			showError("Não foi possível carregar os jogos");
		} finally {
			setIsLoading(false);
		}
	}

	async function handleGuessConfirm(gameId: string) {
		try {
			if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
				return showError("Informe um placar válido!");
			}

			await api.post(`/polls/${pollId}/games/${gameId}/guesses`, {
				firstTeamPoints: Number(firstTeamPoints),
				secondTeamPoints: Number(secondTeamPoints),
			});

			showSuccess("Palpite realizado com sucesso");

			getGames(pollId);
		} catch (error) {
			console.log(error);
			showError("Não foi possível realizar o palpite");
		}
	}

	useEffect(() => {
		getGames(pollId);
	}, [pollId]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<FlatList
			data={games}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<Game
					data={item}
					setFirstTeamPoints={setFirstTeamPoints}
					setSecondTeamPoints={setSecondTeamPoints}
					onGuessConfirm={() => handleGuessConfirm(item.id)}
				/>
			)}
			_contentContainerStyle={{ pb: 10 }}
			ListEmptyComponent={() => <EmptyMyPollList code={code} />}
		/>
	);
}
