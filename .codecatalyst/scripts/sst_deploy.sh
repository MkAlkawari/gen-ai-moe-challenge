#!/usr/bin/env bash
echo "Deploying project"

source ~/.bashrc
nohup dockerd &
docker version
npm install
npm audit fix 
npm audit fix 
npx sst deploy --stage devops-coca --cloudformation-execution-policies arn:aws:iam::600627328431:policy/cdk_toolkit_least_privilege
npx sst deploy --stage prod --cloudformation-execution-policies arn:aws:iam::600627328431:policy/cdk_toolkit_least_privilege
