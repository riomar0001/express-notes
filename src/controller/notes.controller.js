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

// Update note by ID
export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { name, description } = req.body;

    if (!noteId) {
      return res
        .status(400)
        .send({ success: false, message: "Note ID is required" });
    }

    if (!name && !description) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide data to update" });
    }

    // Find the existing note
    const existingNote = await Prisma.notes.findUnique({
      where: {
        id: noteId,
      },
    });

    if (!existingNote) {
      return res
        .status(404)
        .send({ success: false, message: "Note not found" });
    }

    // Update the note
    const updatedNote = await Prisma.notes.update({
      where: {
        id: noteId,
      },
      data: {
        name: name || existingNote.name, 
        body: description || existingNote.body, 
      },
    });

    return res.status(200).send({
      success: true,
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// Delete note by ID
export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    if (!noteId) {
      return res
        .status(400)
        .send({ success: false, message: "Note ID is required" });
    }

    // Attempt to delete the note
    const deletedNote = await Prisma.notes.delete({
      where: {
        id: noteId,
      },
    });

    if (!deletedNote) {
      return res
        .status(404)
        .send({ success: false, message: "Note not found or already deleted" });
    }

    return res.status(200).send({
      success: true,
      message: "Note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};