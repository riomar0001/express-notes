// src/routes/notes.route.js
import { Router } from "express";
import {
  createNote,
  getAllNotes,
  viewNote,
  updateNote,
  deleteNote,
} from "../controller/notes.controller.js";

const router = Router();

// CRUD
router.post("/", createNote); // POST /api/note
router.get("/", getAllNotes); // GET  /api/note
router.get("/:id", viewNote); // GET  /api/note/:id
router.put("/:id", updateNote); // PUT  /api/note/:id
router.delete("/:id", deleteNote); // DELETE /api/note/:id

export default router;