var ursa = require('ursa');
var fs = require('fs');

/**
 * rsa加密
 * @param {数据 明文长度(bytes) <= 密钥长度(bytes)-11.  （1024/8 - 11）或者（2048/8 - 11）} data 
 * @param {编码类型} digest 
 */
function encrypt(data, digest) {
  var dataTemp = '';
  var retData = [];
  var i = 0;

  if (typeof data != "string") {
    data = JSON.stringify(data);
  }
  console.log()
  var publicKey = ursa.createPublicKey(fs.readFileSync(__dirname + "/certs2048/public.pub"));
  // var publicKey = ursa.createPublicKey(fs.readFileSync(__dirname + "/certs1024/public.pub"));
  while (i <= data.length) {
    dataTemp = publicKey.encrypt(data.substring(i, i + 245), 'utf8', (digest || 'base64'), ursa.RSA_PKCS1_PADDING);
    retData.push(dataTemp);
    i = i + 245;
  }

  return retData.join(",");
}

function decrypt(data, enc) {
  var privateKey = ursa.createPrivateKey(fs.readFileSync(__dirname + "/certs2048/private.key.pem"));
  var buf = data.split(',');
  var key = "";

  for (var i = 0; i < buf.length; i++) {
    if (buf[i]) {
      var decryted = privateKey.decrypt(buf[i], (enc || 'base64'), 'utf8', ursa.RSA_PKCS1_PADDING);
      key = key + decryted;
    }
  }

  return key
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
}

