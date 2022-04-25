const express = require("express");
const router = express.Router();
const S3Service = require("../services/s3Service.js");

router.get("/getBuckets", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.getS3Service();
  res.send(result);
  //console.log(result);
});

router.post("/setBucket", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.setS3Service(req.body);
  res.send(result);
  //console.log(result);
});

router.delete("/removeBucket", async (req, res) => {
  const s3Service = new S3Service();
  const result = await s3Service.removeS3Service(req.body);
  res.send(result);
  //console.log(result);
});

module.exports = router;