var fs = require("fs");
var crypto = require("crypto");

/**
 * 签名函数
 * @param {数据} dataIn 
 */
function signFunc(dataIn) {
  let key = Object.keys(dataIn);
  if (!key.length) {
    throw new Error("authCallback 参数错误");
  }
  key.sort(1); //参数排序
  let data = {};
  key.forEach((item) => { data[item] = dataIn[item] });

  //拼装函数
  let str = "";
  for (let item in data) {
    if (item == "sign" || !data[item]) {
      continue;
    }
    if (str) {
      str += ("&" + item + "=" + data[item]);
    } else {
      str += (item + "=" + data[item]);
    }
  }  

  let privatePem = fs.readFileSync(__dirname + "/certs2048Sign/private.key.pem");
  let privateKey = privatePem.toString();

  let signer=crypto.createSign('RSA-SHA1');
  signer.update(new Buffer(str, "utf-8"))
  let sign=signer.sign(privateKey,'base64');

  return sign;
}

/**
 * 验证签名
 * @param {数据} dataIn 
 */
function verifySign(dataIn) {
  let key = Object.keys(dataIn);
  key.sort(1);
  let data = {};
  key.forEach((item)=>{data[item] = dataIn[item]});

  let str = "";
  for (let item in data){ //组织数据
    if (item == "sign" || item == "sign_type" || !data[item]){
      continue;
    }
    if (str){
      str += ("&" + item+ "=" + data[item]);
    } else {
      str += (item+ "=" + data[item]);
    }
  }

  let publicPem = fs.readFileSync(__dirname + "/certs2048Sign/public.pub");
  let public_key = publicPem.toString();
  function verify(src_sign, signature, public_key) {   //签名
    var verifier = crypto.createVerify('RSA-SHA1');
    verifier.update(new Buffer(src_sign, 'utf-8'));
    return verifier.verify(public_key, signature, 'base64');
  }

  let result = verify(str, data.sign, public_key)
  return result
}
module.exports = {
  signFunc: signFunc,
  verifySign: verifySign
}