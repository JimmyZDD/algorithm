var crypto = require('crypto');
var fs = require("fs")
/**
 * md5
 * @param {数据} data 
 * @param {数据编码} enc 
 * @param {结果编码} digest 
 */
function md5sum(data, enc, digest) {
  if (!Buffer.isBuffer(data)) {
    data = new Buffer(data, enc || 'UTF-8');
  }

  var md5 = crypto.createHash('md5');
  md5.update(data);

  return md5.digest(digest || 'base64');
};

/**
 * 加密
 * @param {字符串} str 
 */
function genMd5(str) {
  let md5sum = crypto.createHash('md5');
  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
}

/**
 * 文件md5
 * @param {文件名} filename 
 * @param {结果编码} digest 
 */
function md5file(filename, digest, cb) {
  md5Stream(fs.createReadStream(filename), digest, cb);
};

/**
 * 流数据md5
 * @param {流数据} stream 
 * @param {结果编码} digest 
 */
function md5Stream(stream, digest, cb) {
  var md5 = crypto.createHash('md5');
  stream.on('data', function (chunk) {
    md5.update(chunk);
  });
  stream.on('end', function () {
    cb(null, md5.digest(digest || 'base64'))
  });
  stream.on('error', function (error) {
    cb(error);
  });
};

module.exports = {
  md5sum: md5sum,
  genMd5: genMd5,
  md5file: md5file
}