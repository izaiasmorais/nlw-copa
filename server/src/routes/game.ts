import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function gameRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/polls/:id/games",
    { onRequest: [authenticate] },
    async (req) => {
      const getPollParams = z.object({
        id: z.string(),
      });

      const { id } = getPollParams.parse(req.params);

      const games = await prisma.game.findMany({
        orderBy: {
          date: "desc",
        },
        include: {
          guesses: {
            where: {
              participant: {
                userId: req.user.sub,
                pollId: id,
              },
            },
          },
        },
      });

      return {
        games: games.map((game) => {
          return {
            ...game,
            guess: game.guesses.length > 0 ? game.guesses[0] : null,
            guesses: undefined,
          };
        }),
      };
    }
  );

  fastify.post(
    "/polls/:id/games",
    { onRequest: [authenticate] },
    async (request, reply) => {
      const getPollParams = z.object({
        id: z.string(),
      });

      const { id } = getPollParams.parse(request.params);

      const poll = await prisma.poll.findUnique({
        where: {
          id,
        },
      });

      if (!poll) {
        return reply.status(404).send({
          message: "Poll not found",
        });
      }

      if (poll.ownerId !== request.user.sub) {
        return reply.status(400).send({
          message: "You are not allowed to create a game inside this poll",
        });
      }

      const createGameBody = z.object({
        date: z.string(),
        firstTeamCountryCode: z.string(),
        secondTeamCountryCode: z.string(),
      });

      const { date, firstTeamCountryCode, secondTeamCountryCode } =
        createGameBody.parse(request.body);

      await prisma.game.create({
        data: {
          date: new Date(date),
          firstTeamCountryCode,
          secondTeamCountryCode,
        },
      });

      return reply.status(201).send();
    }
  );
}
