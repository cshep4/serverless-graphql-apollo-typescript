# Serverless GraphQL using Apollo on AWS Lambda

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
![Deploy](https://github.com/cshep4/serverless-graphql-apollo-typescript/workflows/Deploy/badge.svg)

Serverless TypeScript GraphQL API which use the following:

* [Apollo](http://dev.apollodata.com/) GraphQL framework
  using [graphql-server-lambda](https://github.com/apollographql/graphql-server/tree/master/packages/graphql-server-lambda)
* [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) to build the lambda function.
* [serverless-offline](https://github.com/dherault/serverless-offline) to run locally.
* [Github Actions](https://github.com/serverless/github-action) to automatically deploy to AWS Lambda.

## Setup

Clone the repository and install the packages.

```
git clone https://github.com/cshep4/serverless-graphql-apollo-typescript.git
cd serverless-graphql-apollo-typescript
npm install
```

## Run locally

```
serverless offline start
```

## Deploy

```
serverless deploy
```

## Deploy through Github Actions

The [Deploy](./.github/workflows/deploy.yml) workflow will run every time changes are pushed to the master branch.

`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` variables need to be added as repository secrets.
