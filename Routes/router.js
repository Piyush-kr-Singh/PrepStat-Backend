const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");



//Get all the mcq's related Aptitute
router.get("/aptitute", (req, res) => {
  conn.query("SELECT * FROM aptitute where category = 'probability' ", (err, result) => {
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


//Get all the mcq's related Reasoning
router.get("/reasoning", (req, res) => {
  conn.query("SELECT * FROM reasoning where category = 'essential_part' ", (err, result) => {
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
