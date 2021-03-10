// IMPORTS AT THE TOP
const express = require("express");
const Dog = require("./dog-model.js");

// IMPORTS AT THE TOP
const server = express();

// IMPORTS AT THE TOP

// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP

// GLOBAL MIDDLEWARE
server.use(express.json());

// ENDPOINTS
server.get("/", (req, res) => {
  res.json({ hello: "world " });
});

// [GET] / (Hello World endpoint)

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get("/api/dogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await Dog.findById(id);
    res.json(dog);
    if (dog) {
      res.json(dog);
    } else {
      res.status(404).json({ message: "bad id" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get("/api/dogs", async (req, res) => {
  try {
    const dogs = await Dog.findAll();
    res.json(dogs);
  } catch (err) {
    console.log(err);
    res.status(500), json({ error: err });
  }
});

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
server.post("/api/dogs", async (req, res) => {
  const dog = req.body;
  console.log(dog);

  if (!dog.name || !dog.weight) {
    res.status(400).json({ message: "name and weight required" });
  } else {
    try {
      const newDog = await Dog.create(dog);
      res.status(200).json(newDog);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err });
    }
  }
});

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)
server.delete("/api/dogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await Dog.delete(id);
    if (dog) {
      res.json(dog);
    } else {
      res.status(404).json({ message: "bad id" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});
// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server;

// EXPOSING THE SERVER TO OTHER MODULES
// EXPOSING THE SERVER TO OTHER MODULES
