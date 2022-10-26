const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const catagories = require("./data/catagoris.json");
const courses = require("./data/Courses.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("teach me api runnign");
});
app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("/catagory/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(courses);
  } else {
    const catagory = courses.filter((n) => n.catagory_id == id);
    res.send(catagory);
  }
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((n) => n._id == id);
  res.send(course);
});

app.listen(port, () => {
  console.log("Teach me api running on port", port);
});
