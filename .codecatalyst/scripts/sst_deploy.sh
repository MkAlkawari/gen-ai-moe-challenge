#!/usr/bin/env bash
echo "Deploying project"

source ~/.bashrc
nohup dockerd &
docker version
npm install
npm audit fix 
npx sst deploy --stage prod --cloudformation-execution-policies arn:aws:iam::600627328431:policy/cdk_toolkit_least_privilege
