import Fastify from "fastify";
import cors from "@fastify/cors";
import { pollRoutes } from "./routes/poll";
import { authRoutes } from "./routes/auth";
import { userRoutes } from "./routes/user";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.register(pollRoutes);
  fastify.register(authRoutes);
  fastify.register(userRoutes);
  fastify.register(gameRoutes);
  fastify.register(guessRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
