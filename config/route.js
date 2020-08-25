const express = require("express");
const urlCltr = require("../app/controllers/urlCltr");

const router = express.Router();

router.get("/urls", urlCltr.list);
router.post("/urls", urlCltr.create);
router.get("/urls/:id", urlCltr.show);
router.put("/urls/:id", urlCltr.update);
router.delete("/urls/:id", urlCltr.destroy);

module.exports = router;
