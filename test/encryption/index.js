var MD5 = require("../../各种加密算法/md5");
var HASH = require("../../各种加密算法/hash");
var AES = require("../../各种加密算法/aes");
var RSAENC = require("../../各种加密算法/rsa/encryption");
var RSASIGN = require("../../各种加密算法/rsa/sign");
var expect = require('chai').expect;

describe('MD5', function () {
  describe('#md5sum', function () {
    it('should return e3ceb5881a0a1fdaad01296d7554868d when the value is present', function () {
      expect(MD5.md5sum("222222", "UTF-8", "hex")).to.be.equal("e3ceb5881a0a1fdaad01296d7554868d");
    });
  });
});

describe('MD5', function () {
  describe('#genMd5', function () {
    it('should return e3ceb5881a0a1fdaad01296d7554868d when the value is present', function () {
      expect(MD5.genMd5("222222")).to.be.equal("e3ceb5881a0a1fdaad01296d7554868d");
    });
  });
});

//异步比同步多了一个done()        
describe('MD5', function () {
  describe('#md5file', function () {
    it('should return e3ceb5881a0a1fdaad01296d7554868d when the value is present', function (done) {
      MD5.md5file(__dirname + "/file.js", "hex", function (err, data) {
        expect(data).to.be.equal("2af3fb0bfd711340b036a3aa5fd0b7c1");
        done();
      });
    });
  });
});

describe('HASH', function () {
  describe('#hash', function () {
    it('should return b8ad08a3a547e35829b821b75370301dd8c4b06bdd7771f9b541a75914068718 when the value is present', function () {
      expect(HASH.hash("123456", "123456")).to.be.equal("b8ad08a3a547e35829b821b75370301dd8c4b06bdd7771f9b541a75914068718");
    });
  });
});

describe('AES', function () {
  describe('#encrypt', function () {
    it('should return  when the value is present', function () {
      expect(AES.encrypt("123456", "1234567890123456", "1234567890123456", "hex")).to.be.equal("d637735ae9e21ba50cb686b74fab8d2c");
      expect(AES.encrypt("123456", "1234567890123456", "1234567890123456", "base64")).to.be.equal("1jdzWuniG6UMtoa3T6uNLA==");
    });
  });
});

describe('AES', function () {
  describe('#decrypt', function () {
    it('should return  when the value is present', function () {
      expect(AES.decrypt("d637735ae9e21ba50cb686b74fab8d2c", "1234567890123456", "1234567890123456", "hex")).to.be.equal("123456");
      expect(AES.decrypt("1jdzWuniG6UMtoa3T6uNLA==", "1234567890123456", "1234567890123456", "base64")).to.be.equal("123456");
    });
  });
});

describe('RSA', function () {
  describe('#encrypt', function () {
    it('should return  when the value is present', function () { //每次加密结果不同
      console.log(RSAENC.encrypt("12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890", "hex"))
      // expect(RSAENC.encrypt("1234567890123456123456789012345612345678901234561234567890123456", "hex")).to.be.equal("06777000e66fa4395f6b0461d35f47050492b47b80c5e0efa61216513aaa09ee6ff5d729cb02c0fa0767163f15df6fb8cd4fa232a5a44efd93c688a2de26db2ed7c7218f91948fbd17a8814a450c9bef02b4626d854d133574bbdf7d617f407288ffe6c7f2e1e35427e798f76ab32a38fac80aa4862a976f9dca62a71ac73decbf95ea8db1704a7e6f24bf01a8b0411a49db50feffc7eb1570f97062d17829f97078081af49f91276a137cb9a633db180680ea6f2db08c66189d826d31530de9d37db6e6c4c95f101caafb52b9a8687441249fbba1a050c798d1b712c09c829ec063b00f79b0265c0a1ef73f1bed38c92a6b735bac617221bbbe0ccdc76af436");
    });
  });
});

describe('RSA', function () {
  describe('#decrypt', function () {
    it('should return  when the value is present', function () {
      expect(RSAENC.decrypt("3dfdb4eb66f0eeb51ef9433662ef5f220fea1d3dd8078274692e7bf762effaf5952843f743f75ee6a96d1ff22c2e5a25a229e6f4fc05a192463eec68bff2dbdc84dce58feffceae259602d42b57cabb5b84e99edc6dca783dff38230838c6b5212cec708f0162753fc6b8c9ab47e3a6a286d5e0c74d033b15df6bd00caa909f4976228d4b4ea733ace31db0f6da7484ae55380319183e05e1ea0147538407cca4a86a0c1ae54a5bb28ced868341846b3e8a9e416a98aef1ca664e3ae23e48e58d4927137d2df4022dfe1f9e43b215fcfe7debc3e22be4abcf602e894990f222674c247bfddd6021b656cd3274060e9ba7add1fa526159e6a542abf9fe1a38d7a", "hex")).to.be.equal("1234567890123456");
    });
  });
});

describe('RSA', function () {
  describe('#sign', function () {
    it('should return  when the value is present', function () {
      expect(RSASIGN.signFunc({
        gmt_create: '2017-09-20 12:18:13',
        charset: 'utf-8',
        seller_email: 'fengyh13@163.com',
        subject: 'ColorSeed多情的种子心情唇膏字母系列',
      })).to.be.equal("cRGBOa1az3ZfUhbiYzujeLjZkoevUPSKxzL6U5Fgb9HOc5MLAVmGzix1F66I8ouRadp87q2Z079xBfOWiDbAfymeOM80jRLn6vz6wC79XOnD8IpTy+bxndMJ12KCavOciKA0Hfa3QEKW7nbwpSuON2P2IW2crQpMBAzkPvcePjuK2AwICRzJZFKp7eRfFasf/8Zc4FwRkNQ6NB/xSI64+yoAengIJ08CSpb09hn9uJpVPNiEwg4Wa3QApFXsXyBD3Wg3R5VclI/A8NCu27lJUABe0325NKf/1KxJDSoCRViCGz7CgO2NaqNnh+Q8bKtWHBc6/mh067nt9RwSIX5fsQ==");
    });
  });
});

describe('RSA', function () {
  describe('#verifySign', function () {
    it('should return true when the value is present', function () {
      expect(RSASIGN.verifySign({
        gmt_create: '2017-09-20 12:18:13',
        charset: 'utf-8',
        seller_email: 'fengyh13@163.com',
        subject: 'ColorSeed多情的种子心情唇膏字母系列',
        sign: "cRGBOa1az3ZfUhbiYzujeLjZkoevUPSKxzL6U5Fgb9HOc5MLAVmGzix1F66I8ouRadp87q2Z079xBfOWiDbAfymeOM80jRLn6vz6wC79XOnD8IpTy+bxndMJ12KCavOciKA0Hfa3QEKW7nbwpSuON2P2IW2crQpMBAzkPvcePjuK2AwICRzJZFKp7eRfFasf/8Zc4FwRkNQ6NB/xSI64+yoAengIJ08CSpb09hn9uJpVPNiEwg4Wa3QApFXsXyBD3Wg3R5VclI/A8NCu27lJUABe0325NKf/1KxJDSoCRViCGz7CgO2NaqNnh+Q8bKtWHBc6/mh067nt9RwSIX5fsQ=="
      })).to.be.equal(true);
    });
  });
});