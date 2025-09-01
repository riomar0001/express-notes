import express from "express";

import {
  createNote,
  updateNote,
  viewNote,
} from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.post("/update/:id", updateNote);

export default router;
