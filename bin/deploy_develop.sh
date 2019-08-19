#!/bin/bash
# Deploy to production
echo "Deploying to ACS"
$(aws ecr get-login --no-include-email --region us-east-1)
docker build -t accounts-api .
docker tag accounts-api:latest 225412890769.dkr.ecr.us-east-1.amazonaws.com/develop-accounts-api:latest
docker push 225412890769.dkr.ecr.us-east-1.amazonaws.com/develop-accounts-api:latest