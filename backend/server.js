require("dotenv").config();
console.log('MONGO_URI from .env:', process.env.MONGO_URI);
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const MongoConnection = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const freelancerRoutes = require("./routes/FreelancerRoutes");
const clientRoutes = require("./routes/ClientRoutes");
const chatRoutes = require("./routes/ChatRoutes");
const bodyParser = require("body-parser");

app.use(cors({
  origin: 'https://freelancia.vercel.app',
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

MongoConnection();

app.use("/user", userRoutes);
app.use("/freelancer", freelancerRoutes);
app.use("/client", clientRoutes);
app.use("/chat", chatRoutes);
const path = require("path");

// Serve images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/ProfilePic", express.static(__dirname + "/uploads/Users_imgs"));
app.use("/ServicePic", express.static(__dirname + "/uploads/UsersServices"));

app.listen(port, (err) => {
  if (err) console.log("Server Error :" + err.message);
  else console.log("Server Running on Port: " + port);
});
