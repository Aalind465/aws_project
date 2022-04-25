# aws_project

Docker Image Link
Project Link:https://hub.docker.com/repository/docker/aalindinnogeeks/aws-app2

Technologies 
1. Node.js
2. AWS SDK's
3. Docker
4. Express (routing)


Installation
Clone the repo
git clone 
https://github.com/Aalind465/aws_project.git

Install NPM packages
npm install

Services Added
EC2 Services:

Create EC2 Instance (/ec2/setInstance)
Show EC2 Instance List (/ec2/getInstances)
Start EC2 Instance (/ec2/startInstance)
Stop EC2 Instance (/ec2/stopInstance)
Terminate EC2 Instance (/ec2/terminateInstance)

S3 Services:

Create S3 Bucket (/s3/setBucket)
Show S3 Buckets (/s3/getBuckets)
Delete S3 Bucket (/s3/removeBucket)


AWS Hosting 
1. create a ec2 instance with default settings
2. give inbound port 3000
3. Connect the instance via ssh terminal
4. Install Nodejs   
5. Install git on Ubuntu
sudo apt-get install git
6. Clone app on server with git hub repo
7. Start the node.js app
node index.js
8. Keep App running using PM2
npm install pm2 -g
sudo pm2 start index.js
PM2 list


Now you are redy to use your application!!!
