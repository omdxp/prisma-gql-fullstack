import "./models/user";
import "./models/note";

import { builder } from "./builder";
export const schema = builder.toSchema();
