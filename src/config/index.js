const dotenv = require('dotenv')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

const config = {
  port: process.env.PORT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  oauthUrl: process.env.OAUTH_URL,
  apiUrl: process.env.API_URL
}

if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
} else {
  module.exports = config
}