# 🔥 FireCloud: Access Service

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cunt666-proxy/firecloud-access-service)

## Overview

The Access Service is a microservice running on Cloudflare Workers, designed for user authentication, account management, and policy-based access control. It utilizes Cloudflare KV for logging and storing dynamic secrets, and Realm Web for managing user information. This service is responsible for user authentication, policy management, and token generation. Access to certain endpoints requires authorization and specific policies or root-level rights.

## 🚀 Getting Started

To get started with the Access Service, follow these steps:

1.  [Register for a MongoDB account](https://www.mongodb.com/cloud/atlas/register) if you don't have one already.

2.  Update the `wrangler.toml` configuration file with the appropriate MongoDB and Cloudflare KV information. You can specify the `name` and `service` as desired; these are cluster and database names.

3.  [Create a Cloudflare Worker KV](https://developers.cloudflare.com/kv/get-started/#3-create-a-kv-namespace) with the name "logs" and "secrets". Update the `wrangler.toml` file with their respective IDs.

4.  Specify the `app_secret` in the configuration file. This token is critical for securing sensitive information in the project, and it is not recommended to change or distribute it online.


## Endpoints

[Here is a list of all available endpoints](/src/README.md)  

## Cron Jobs

The service includes two cron jobs:

1.  `0 0 \* \* \*`: Runs daily to purge expired tokens and logs.

2.  `0 15 1 \* \*`: Runs monthly to rotate secrets.


These cron jobs help maintain data integrity and security.

For any issues or inquiries, please refer to the provided contact information in the project documentation.


## 🐞 Reporting issues

If you find API issues or bugs when testing, please create a ticket and assign it to a member of the development team.

## 🛟 Help and support

If you have any questions or suggestions, please don't hesitate to reach out to your manager or any member of the Quality Engineering team.
