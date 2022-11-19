import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.game.create({
		data: {
			date: "2022-11-24T16:00:00.201Z",
			firstTeamCountryCode: "BR",
			secondTeamCountryCode: "RS",
		},
	});

	await prisma.game.create({
		data: {
			date: "2022-11-28T13:00:00.201Z",
			firstTeamCountryCode: "BR",
			secondTeamCountryCode: "CH",
		},
	});

	await prisma.game.create({
		data: {
			date: "2022-12-22T16:00:00.201Z",
			firstTeamCountryCode: "CM",
			secondTeamCountryCode: "BR",
		},
	});
}

main();
