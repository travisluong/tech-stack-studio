#!/bin/bash

source ~/.nvm/nvm.sh
npm install
cd tech-stack-studio-website
npm install
npm run build
cd ..
pm2 reload ecosystem.config.js --env production