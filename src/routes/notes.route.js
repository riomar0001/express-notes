import express from "express";

import { createNote, getAllNotes, viewNote, updateNote, deleteNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.get("/viewAll", getAllNotes);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);


export default router;
