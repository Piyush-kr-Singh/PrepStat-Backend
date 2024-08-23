const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");

//Register user data
router.post("/create", (req, res) => {
  // console.log(req.body);
  const { name, email, age, mobile, work, address, des } = req.body;
  if (!name || !email || !age || !mobile || !work || !address || !des) {
    res.status(422).json("Please fill all the data");
  }
  try {
    conn.query(
      "select * from users where email = ?",
      [email],
      (err, result) => {
        if (err) {
          console.log("err", err);
          res.send(500).json("Internal server error");
        }
        if (result.length) {
          res.status(422).json("This data is already added");
        } else {
          conn.query(
            "insert into users set ?",   
            { name, email, age, mobile, work, address, des },
            (err) => {
              if (err) {
                console.log("err", err);
              } else {
                res.status(201).json(req.body);
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(401).json(error);
  }
});




//Get user

router.get("/getusers", (req, res) => {
  conn.query("select * from users", (err, result) => {
    if (err) {
      res.status(422).json("No data available");
    } else {
      res.status(201).json(result);
    }
  });
});





//Delete user

router.delete("/deleteuser/:id", (req, res) => {
    const {id} =req.params;

    conn.query("delete from users where id = ? ",[id] , (err, result) => {
      if (err) {
        res.status(422).json("Data not deleted");
      } else {
        res.status(201).json(result);
      }
    });
  });




  // Get single user

  router.get("/getuser/:id", (req, res) => {
    const {id} =req.params;

    conn.query("select * from users where id = ? ",[id] , (err, result) => {
      if (err) {
        res.status(422).json("Data not fetched correctly");
      } else {
        res.status(201).json(result);
      }
    });
  });




  // Update user

  router.patch("/updateuser/:id", (req, res) => {
    const {id} =req.params;
    const data=req.body;

    conn.query("update users set ? where id = ? ",[data,id] , (err, result) => {
      if (err) {
        res.status(422).json("Data not updated correctly");
      } else {
        res.status(201).json(result);
      }
    });
  });



module.exports = router;
