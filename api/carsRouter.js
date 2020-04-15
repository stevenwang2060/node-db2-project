const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ msg: "cannot retrieve accounts", err });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .first()
    .then((car) => {
      if (car) {
        res.status(200).json({ data: car });
      } else {
        res.status(500).json({ msg: "car not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ msg: "server error", err });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.statusCode(500).json({ msg: "failed to insert car", err });
    });
});

module.exports = router;