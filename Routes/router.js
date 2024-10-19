const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");



//Get all category related Aptitute
router.get("/aptitude", (req, res) => {
  conn.query("SELECT DISTINCT category FROM aptitute", (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found");
    } else {
      const categories = result.map(row => row.category);
      res.status(200).json(categories);
    }
  });
});


router.get("/aptitude/:topic", (req, res) => {
  const topic = req.params.topic;

  conn.query("SELECT * FROM aptitute WHERE category = ?", [topic], (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found for the selected topic");
    } else {
      res.status(200).json(result);
    }
  });
});


//Get all the mcq's related Reasoning
router.get("/reasoning", (req, res) => {
  conn.query("SELECT DISTINCT category FROM reasoning", (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found");
    } else {
      const categories = result.map(row => row.category);
      res.status(200).json(categories);
    }
  });
});

router.get("/reasoning/:topic", (req, res) => {
  const topic = req.params.topic;

  conn.query("SELECT * FROM reasoning WHERE category = ?", [topic], (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found for the selected topic");
    } else {
      res.status(200).json(result);
    }
  });
});



router.get("/verbal", (req, res) => {
  conn.query("SELECT DISTINCT category FROM verbal", (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found");
    } else {
      const categories = result.map(row => row.category);
      res.status(200).json(categories);
    }
  });
});

router.get("/verbal/:topic", (req, res) => {
  const topic = req.params.topic;

  conn.query("SELECT * FROM verbal WHERE category = ?", [topic], (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found for the selected topic");
    } else {
      res.status(200).json(result);
    }
  });
});


router.get("/interview", (req, res) => {
  conn.query("SELECT DISTINCT category FROM interview", (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found");
    } else {
      const categories = result.map(row => row.category);
      res.status(200).json(categories);
    }
  });
});

router.get("/interview/:topic", (req, res) => {
  const topic = req.params.topic;

  conn.query("SELECT * FROM interview WHERE category = ?", [topic], (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found for the selected topic");
    } else {
      res.status(200).json(result);
    }
  });
});


router.get("/stats", (req, res) => {
  conn.query("SELECT * FROM stats  ", (err, result) => {
    if (err) {
      console.log("err", err);
      res.status(500).json("Internal server error");
    } else if (result.length === 0) {
      res.status(404).json("No data found");
    } else {
      res.status(200).json(result);
    }
  });
});


module.exports = router;
