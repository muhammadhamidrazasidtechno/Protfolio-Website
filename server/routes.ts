import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertSkillSchema, insertProjectSchema, insertAboutSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid message data" });
    }
  });

  // Admin - Skills
  app.get("/api/admin/skills", async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.post("/api/admin/skills", async (req, res) => {
    try {
      const data = insertSkillSchema.parse(req.body);
      const skill = await storage.createSkill(data);
      res.json(skill);
    } catch (error) {
      res.status(400).json({ error: "Invalid skill data" });
    }
  });

  app.patch("/api/admin/skills/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = insertSkillSchema.partial().parse(req.body);
      const skill = await storage.updateSkill(id, data);
      res.json(skill);
    } catch (error) {
      res.status(400).json({ error: "Invalid skill data" });
    }
  });

  app.delete("/api/admin/skills/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteSkill(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Failed to delete skill" });
    }
  });

  // Admin - Projects
  app.get("/api/admin/projects", async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post("/api/admin/projects", async (req, res) => {
    try {
      const data = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(data);
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.patch("/api/admin/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = insertProjectSchema.partial().parse(req.body);
      const project = await storage.updateProject(id, data);
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  app.delete("/api/admin/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProject(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Failed to delete project" });
    }
  });

  // Admin - About
  app.get("/api/admin/about", async (req, res) => {
    const about = await storage.getAbout();
    res.json(about);
  });

  app.patch("/api/admin/about", async (req, res) => {
    try {
      const data = insertAboutSchema.parse(req.body);
      const about = await storage.updateAbout(data);
      res.json(about);
    } catch (error) {
      res.status(400).json({ error: "Invalid about data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}