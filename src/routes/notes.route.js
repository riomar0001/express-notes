import express from "express";

import { createNote, delNote, getNotes, uptNote, viewNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.get("/viewAll", getNotes);
router.put("/update/:id", uptNote);
router.delete("/delete/:id", delNote);


export default router;
