import { Button, HStack, Text, useTheme, VStack } from "native-base";
import { X, Check } from "phosphor-react-native";
import { getName } from "country-list";
import { Team } from "./Team";
import ptBR from "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { useState } from "react";

interface GuessProps {
	id: string;
	gameId: string;
	createdAt: string;
	participantId: string;
	firstTeamPoints: number;
	secondTeamPoints: number;
}

export interface GameProps {
	id: string;
	date: string;
	firstTeamCountryCode: string;
	secondTeamCountryCode: string;
	guess: GuessProps | null;
	isOver: boolean;
}

interface Props {
	data: GameProps;
	onGuessConfirm: () => void;
	setFirstTeamPoints: (value: string) => void;
	setSecondTeamPoints: (value: string) => void;
}

export function Game({
	data,
	setFirstTeamPoints,
	setSecondTeamPoints,
	onGuessConfirm,
}: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const { colors, sizes } = useTheme();
	const when = dayjs(data.date)
		.locale(ptBR)
		.format("DD [de] MMMM [de] YYYY [ás] HH:00[h]");

	const handleButtonClick = async () => {
		setIsLoading(true);
		await onGuessConfirm();
		setIsLoading(false);
	};

	return (
		<VStack
			w="full"
			bgColor="gray.800"
			rounded="sm"
			alignItems="center"
			borderBottomWidth={3}
			borderBottomColor="yellow.500"
			mb={3}
			p={4}
		>
			<Text color="gray.100" fontFamily="heading" fontSize="sm">
				{getName(data.firstTeamCountryCode)} vs.{" "}
				{getName(data.secondTeamCountryCode)}
			</Text>

			<Text color="gray.200" fontSize="xs">
				{when}
			</Text>

			<HStack
				mt={4}
				w="full"
				justifyContent="space-between"
				alignItems="center"
			>
				<Team
					code={data.firstTeamCountryCode}
					points={data.guess?.firstTeamPoints}
					onChangeText={setFirstTeamPoints}
					position="right"
				/>

				<X color={colors.gray[300]} size={sizes[6]} />

				<Team
					position="left"
					code={data.secondTeamCountryCode}
					points={data.guess?.secondTeamPoints}
					onChangeText={setSecondTeamPoints}
				/>
			</HStack>

			{!data.guess && (
				<Button
					size="md"
					w="full"
					mt={4}
					bgColor="green.500"
					_pressed={{ bg: "green.600" }}
					onPress={handleButtonClick}
					isLoading={isLoading}
					isDisabled={data.isOver}
				>
					<HStack alignItems="center">
						<Text color="white" fontSize="xs" fontFamily="heading" mr={3}>
							{data.isOver ? "TEMPO ESGOTADO" : "CONFIRMAR PALPITE"}
						</Text>

						{!data.isOver && <Check color={colors.white} size={sizes[4]} />}
					</HStack>
				</Button>
			)}
		</VStack>
	);
}
