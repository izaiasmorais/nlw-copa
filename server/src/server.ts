import Fastify from "fastify";
import cors from "@fastify/cors";
import { pollRoutes } from "./routes/poll";
import { authRoutes } from "./routes/auth";
import { userRoutes } from "./routes/user";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import jwt from "@fastify/jwt";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "nlwcopa",
  });

  // secret might be a env on production

  fastify.register(pollRoutes);
  fastify.register(authRoutes);
  fastify.register(userRoutes);
  fastify.register(gameRoutes);
  fastify.register(guessRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
