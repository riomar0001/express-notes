import express from "express";

import { createNote, deleteNote, update, viewAllNotes, viewNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.get("/viewAll", viewAllNotes);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteNote);

export default router;
