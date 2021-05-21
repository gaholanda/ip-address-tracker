module.exports = () => {

  const { APP_ENV } = process.env;

  const env = {
    APP_ENV: APP_ENV ?? 'production'
  }

  return {
    env,
  }
}