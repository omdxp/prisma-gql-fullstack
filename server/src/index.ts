import { createServer } from "node:http";
import { createYoga } from "@graphql-yoga/node";
import { prisma } from "./db";
import { schema } from "./schema";

const yoga = createYoga({
  schema,
  context: {
    prisma,
  },
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server listening on http://localhost:4000/graphql");
});
