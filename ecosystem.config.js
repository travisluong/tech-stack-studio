const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  apps: [
    {
      name: "tech-stack-studio-website",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "./tech-stack-studio-website",
      env_production: {
        NODE_ENV: "production",
        PORT: 3004,
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
      "post-deploy": "./build.sh",
      "pre-setup": "",
    },
  },
};
