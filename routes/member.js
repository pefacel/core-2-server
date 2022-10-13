const express = require("express");

const router = express.Router();

const {
  create,
  listAll,
  remove,
  read,
  update,
  showBody
} = require("../controllers/member");

router.post("/member", create);

router.get("/member", listAll);
router.get("/member/:id", read);

router.delete("/member/:id", remove);
router.put("/member/:id", update);

router.post("/member/show",showBody)


module.exports = router;
