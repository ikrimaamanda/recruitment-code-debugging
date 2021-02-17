const config = require('../config/index')

function redirectUri() {
  return `${config.oauthUrl}/authorize?client_id=${config.clientId}`
}

module.export = {
  redirectUri: redirectUri
}