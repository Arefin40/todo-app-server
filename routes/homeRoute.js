import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
   res.status(200).send("📋 Todo App Server is running");
});

export default router;
