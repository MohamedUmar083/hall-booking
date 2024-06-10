import express from "express";
import cors from "cors";
import room from "./Routers/roomRouters.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("This is home page");
});

app.use("/api", room);

app.listen(PORT, () => {
  console.log(`This App is Running in http://localhost:${PORT}`);
});
