import { HStack } from "native-base";
import CountryFlag from "react-native-country-flag";

import { Input } from "./Input";

interface Props {
	code: string;
	position: "left" | "right";
	points?: number;
	onChangeText: (value: string) => void;
}

export function Team({ code, points, position, onChangeText }: Props) {
	console.log(points);

	return (
		<HStack alignItems="center">
			{position === "left" && (
				<CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
			)}

			<Input
				w={10}
				h={9}
				textAlign="center"
				fontSize="xs"
				keyboardType="numeric"
				defaultValue={points ? String(points) : points === 0 ? "0" : undefined}
				onChangeText={onChangeText}
				isDisabled={points >= 0 ? true : false}
				_disabled={{
					opacity: 100,
					borderColor: "green.500",
				}}
			/>

			{position === "right" && (
				<CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
			)}
		</HStack>
	);
}
