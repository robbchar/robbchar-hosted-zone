import * as cdk from "aws-cdk-lib";
import { aws_route53 as route53 } from "aws-cdk-lib";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";
import { ARecord, RecordTarget } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface HostedZoneProps {
  domainName: string;
  description: string;
}

export class RobbcharHostedZone extends Construct {
  constructor(parent: cdk.Stack, name: string, props: HostedZoneProps) {
    super(parent, name);

    // hosted zone
    const myHostedZone = new route53.HostedZone(this, "HostedZone", {
      zoneName: props.domainName,
      comment: props.description,
    });
    new cdk.CfnOutput(this, "PublicHostedZoneOutput", {
      // remove '.com' from exportName as export name can only contain alphanumeric
      exportName: `${props.domainName.slice(0, -4)}PublicHostedZoneId`,
      value: myHostedZone.hostedZoneId,
    });
    // record for root traffic
    // sample record for root domain
    // pointsd to google.com for testing, replace with resource or other ip address
    // new ARecord(this, "Alias", {
    //   zone: myHostedZone,
    //   target: RecordTarget.fromIpAddresses("142.251.33.78"),
    // });
  }
}
