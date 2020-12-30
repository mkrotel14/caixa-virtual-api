module.exports = {
  apps: [
    {
      name: 'CAIXAVIRTUAL_API',
      script: 'build/infra/server.js',
      instances: 1,
      watch: true,
    },
  ],
};
