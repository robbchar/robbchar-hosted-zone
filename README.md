# Robbchar HostedZone repo

This hosts all the code for thee main robbchar.com hosted zone

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Notes

the nameservers for the domain and the hostedzone are seperate they musst be the same things for the hostedzone to be authoratative

not sure how to add a certificate to the hosted zone. must add it to the resource/site itself

old google domain nameseervers:
ns-cloud-e1.googledomains.com
ns-cloud-e2.googledomains.com
ns-cloud-e3.googledomains.com
ns-cloud-e4.googledomains.com
