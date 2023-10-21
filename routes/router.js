const router = require("express").Router();
const { viewController, modelController } = require("../controllers");
const multer = require("../middleware/multer");

router.get("/", viewController.renderHomePage);
router.get("/succes", viewController.renderSuccesPage);

// router.get("/api/v1/users", modelController.data);

router.post("/upload", multer.single("file"), modelController.upload);

module.exports = router;
