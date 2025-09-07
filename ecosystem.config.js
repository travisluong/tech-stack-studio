const dotenv = require("dotenv");

dotenv.config();

const buildScript = `source ~/.nvm/nvm.sh \
npm install \
cd tech-stack-studio-website \
npm install \
npm run build \
cd .. \
pm2 reload ecosystem.config.js`;

module.exports = {
  apps: [
    {
      name: "tech-stack-studio-website",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./tech-stack-studio-website",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      user: process.env.SSH_USERNAME,
      host: process.env.SSH_HOSTMACHINE,
      ref: process.env.REF,
      repo: process.env.GIT_REPOSITORY,
      path: process.env.DESTINATION_PATH,
      "pre-deploy-local": "",
      "post-deploy": buildScript,
      "pre-setup": "",
    },
  },
};
