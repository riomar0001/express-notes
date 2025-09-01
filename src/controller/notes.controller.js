import Prisma from "../config/prisma.config.js";

export const createNote = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      res
        .status(400)
        .send({ success: false, message: "Please enter all fields" });
    }

    const createNote = await Prisma.notes.create({
      data: {
        name,
        body: description,
      },
    });

    if (!createNote) {
      return res
        .status(400)
        .send({ success: false, message: "Note not created" });
    }

    return res.status(200).send({ success: true, data: createNote });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const viewNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    if (!noteId) {
      return res
        .status(400)
        .send({ success: false, message: "Note ID is required" });
    }

    const note = await Prisma.notes.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!note) {
      return res
        .status(404)
        .send({ success: false, message: "Note not found" });
    }

    return res.status(200).send({ success: true, data: note });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { name, description } = req.body;

    if (!noteId) {
      return res
        .status(400)
        .send({ success: false, message: "Note ID is required" });
    }

    if (!name || !description) {
      return res
        .status(400)
        .send({ success: false, message: "Please enter all fields" });
    }

    const existingNote = await Prisma.notes.findUnique({
      where: { id: noteId },
    });

    if (!existingNote) {
      return res
        .status(404)
        .send({ success: false, message: "Note not found" });
    }

    const updatedNote = await Prisma.notes.update({
      where: { id: noteId },
      data: {
        name,
        body: description,
      },
    });

    return res.status(200).send({ success: true, data: updatedNote });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
