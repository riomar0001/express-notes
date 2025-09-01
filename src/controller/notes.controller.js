import { Prisma } from "../config/prisma.config.js";

export const createNote = async (req, res) => {
    try {
        const { name , description } = req.body;

        if (!name || !description) {
            res
            .status(400)
            .send({ success: false, message: "Please enter all fields"):
            }

            const createNote = await Prisma.notes.create({
                data: {
                    name,
                    description,
                },
            });

            return res.status(200).send({ success: true, data: createNote});
    }catch (error){
        return res.status(500).send({ success: false, message: error.message});

    }

        
};
