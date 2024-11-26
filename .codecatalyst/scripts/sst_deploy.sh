#!/usr/bin/env bash
echo "Deploying project"
npx sst deploy --stage devops-coca --cloudformation-execution-policies arn:aws:iam::600627328431:policy/cdk_toolkit_least_privilege
npm install
npm audit fix 
npx sst deploy --stage prod --cloudformation-execution-policies arn:aws:iam::600627328431:policy/cdk_toolkit_least_privilege
