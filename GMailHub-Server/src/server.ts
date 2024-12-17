import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import homeRoutes from "@/routes";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", homeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
