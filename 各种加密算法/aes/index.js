var crypto = require('crypto');
/**
 * aes加密  aes-128-cbc
 * @param {明文} enData 
 * @param {key 16个字符} key 
 * @param {偏移量 16个字符} iv 
 * @param {编码方式} digest 
 */
function encrypt(enData, key, iv, digest){
  try {
    if (typeof enData !== 'string'){
      enData = JSON.stringify(enData);
    }
    let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    let crypted = cipher.update(enData, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString(digest || 'base64');
    return crypted;
  } catch (error) {
	  console.error("error===>", error);
    return null
  }
}

/**
 * 解密  aes-128-cbc
 * @param {密文} encrypted 
 * @param {key 16个字符} key 
 * @param {偏移量 16个字符} iv 
 * @param {编码方式} enc 
 */
function decrypt(crypted, key, iv, enc){
  try {
    crypted = new Buffer(crypted, (enc || 'base64')).toString('binary');
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    let decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
  } catch (error) {
    console.error("error===>", error);
    return null    
  }
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
}