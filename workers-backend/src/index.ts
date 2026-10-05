import { Hono } from "hono";
import { cors } from "hono/cors";

export interface Env {
  MY_VAR: string;
}

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

app.get("/health", (c) => c.json({ status: "ok" }));

export default app;