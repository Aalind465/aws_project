const express = require("express");
const router = express.Router();
const EC2Service = require("../services/ec2Service.js");

router.get("/getInstances", async (req, res) => {
  const ec2Service = new EC2Service();
  const result = await ec2Service.getEC2Instance();
  res.send(result.Reservations[0].Instances);
  console.log(result.Reservations[0].Instances);
});

router.post("/setInstance", async (req, res) => {
  const ec2Service = new EC2Service();
  const result = await ec2Service.setEC2Instance(req.body);
  res.send(result);
  console.log(result);
});

router.post("/startInstance", async (req, res) => {
  const ec2Service = new EC2Service();
  const result = await ec2Service.startEC2Instance(req.body);
  res.send(result);
  console.log(result);
});

router.post("/stopInstance", async (req, res) => {
  const ec2Service = new EC2Service();
  const result = await ec2Service.stopEC2Instance(req.body);
  res.send(result);
  console.log(result);
});

router.post("/terminateInstance", async (req, res) => {
  const ec2Service = new EC2Service();
  const result = await ec2Service.terminateEC2Instance(req.body);
  res.send(result);
  console.log(result);
});

module.exports = router;