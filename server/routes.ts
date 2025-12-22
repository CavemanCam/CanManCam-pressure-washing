import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { registerSitemapRoutes } from "./sitemap";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerSitemapRoutes(app);

  return httpServer;
}
