# RSA 加密

## 加密密钥生成

  openssl genrsa -out certs/server/my-server.key.pem 1024
  openssl rsa -in certs/server/my-server.key.pem -pubout -out certs/client/my-server.pub

  //将pkcs1转换成将pkcs8 签名需要pkcs8
  openssl pkcs8 -topk8 -inform PEM -in private.key.pem -outform pem -nocrypt -out pkcs8.pem
## 加密长度

  明文长度(bytes) <= 密钥长度(bytes)-11.  
  1024bits加密（1024/8 - 11）= **117**
  2048bits加密 (2048/8 - 11）= **245**

  密文长度 
  1024bits加密密文长度 = (1024/8)*2
  2048bits加密密文长度 = (2048/8)*2

## 大字符串rsa加密
  加密长度受限，因此大文件不适合使用rsa加密，可考虑aes等。如果一定要用rsa加密，可用分段rsa加密

## 密钥对头 PKCS#8 和 PKCS#1
  EGIN RSA PRIVATE KEY is PKCS#1
  -----BEGIN RSA PRIVATE KEY-----
  BASE64 ENCODED DATA
  -----END RSA PRIVATE KEY-----

  -----BEGIN RSA PUBLIC KEY-----
  BASE64 ENCODED DATA
  -----END RSA PUBLIC KEY-----

  BEGIN PRIVATE KEY is PKCS#8 
  -----BEGIN PRIVATE KEY-----
  BASE64 ENCODED DATA
  -----END PRIVATE KEY-----

  -----BEGIN PUBLIC KEY-----
  BASE64 ENCODED DATA
  -----END PUBLIC KEY-----