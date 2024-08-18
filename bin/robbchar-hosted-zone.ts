#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { RobbcharHostedZone } from "../lib/robbchar-hosted-zone";

import * as config from "../pipeline.config.json";
/**
 * This stack relies on getting the domain name from CDK context.
 * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www'
 * Or add the following to cdk.json:
 * {
 *   "context": {
 *     "domain": "mystaticsite.com",
 *     "description": "my static website",
 *   }
 * }
 **/
/**
 * Container for records, and records contain information about
 * how to route traffic for a specific domain, such as example.com and its subdomains
 */
class RobbcharHostedZoneStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    new RobbcharHostedZone(this, "HostedZoneConstruct", {
      domainName: "robbchar.com",
      description: "main robbchar.com hosted zone",
    });
  }
}

const app = new cdk.App();

new RobbcharHostedZoneStack(app, "HostedZoneStack", {
  env: {
    account: config.environments.production.env.account,
    region: config.environments.production.env.region,
  },
});
app.synth();
