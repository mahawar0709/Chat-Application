//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import path from "path"
import {fileURLToPath} from 'url';
// import cors from "cors"
//app-config
const app = express();
const port = process.env.port || 9000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pusher = new Pusher({
  appId: "1553368",
  key: "5a8696c2432a896eb9f4",
  secret: "45176eeba0ab70f931f3",
  cluster: "ap2",
  useTLS: true,
});

//middleware
app.use(express.json());
// app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.static(path.join(__dirname,'./chatapp/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./chatapp/build/index.html"))
})
//DB config
const connection_url =
  "mongodb+srv://tanu07:GpCUYRBMGAfglQM2@cluster0.nlzx7se.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url);

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occured", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        Message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering pusher");
    }
  });
});

//API routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

//listener
app.listen(port, () => {
  console.log(`listening on local host ${port}`);
});
