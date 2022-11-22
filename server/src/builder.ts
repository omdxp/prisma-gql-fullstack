import { PrismaClient, prisma } from "./db";

import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import SchemaBuilder from "@pothos/core";

export const builder = new SchemaBuilder<{
  Context: { prisma: PrismaClient };
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.addScalarType("Date", DateResolver, {});

builder.queryType({
  fields: (t) => ({
    hello: t.field({
      type: "String",
      resolve: () => "World",
    }),
  }),
});
