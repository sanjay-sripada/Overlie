import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
