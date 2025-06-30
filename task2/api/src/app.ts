import express, { Application, Request, Response } from "express";
import journeyRouter from "./routes/journeyRouter";

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/journeys", journeyRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
