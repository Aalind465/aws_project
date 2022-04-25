// snippet-start:[ec2.JavaScript.createclientv3]
const { EC2Client } = require("@aws-sdk/client-ec2");
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create anAmazon EC2 service client object.
const ec2Client = new EC2Client({ region: REGION });
module.exports = { ec2Client };
// snippet-end:[ec2.JavaScript.createclientv3]