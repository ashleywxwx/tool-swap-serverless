# Tool Swap Serverless

Tool Swap backend using:

* Serverless (based on [aws-node-graphql-and-rds](https://github.com/serverless/examples/tree/v3/aws-node-graphql-and-rds))
* AWS RDS Aurora

## How to Deploy This Project

### Pre-Requisites

To deploy this GraphQL API, you’ll need the following:

* An AWS account.
* [AWS CLI](https://aws.amazon.com/cli/) installed locally.
* API credentials for your AWS account configured in your AWS CLI locally by running `aws configure`.
* Serverless framework installed locally via `npm -g install serverless`.

### Steps to Deploy

Once all pre-requisite items are ready, follow these steps to deploy this example GraphQL API:

1. Run `npm install` to install all the necessary dependencies.
2. Run `npm run deploy` to deploy the stack.

### Steps to Remove All Resources

After you’ve finished working with this example, remove all resources to make sure you’re not getting billed for unused RDS databases.

Run `npm run remove` to remove all resources.
