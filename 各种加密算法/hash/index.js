const crypto = require('crypto');

/**
 * hash加密
 * @param {数据} data 
 * @param {hash key} key 
 */
function hash(data, key) {
  var sha256Hmac = crypto.createHmac('sha256', key);
  sha256Hmac.update(data);
  return sha256Hmac.digest('hex');
};

module.exports = {
  hash: hash
}