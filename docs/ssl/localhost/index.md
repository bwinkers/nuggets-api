# SSL / HTTPS support for localhost

Use mkcert

## Install mkcert on Ubuntu 24

```sh
sudo apt install libnss3-tools
curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
chmod +x mkcert-v*-linux-amd64
sudo cp mkcert-v*-linux-amd64 /usr/local/bin/mkcert
mkcert -install
```
Result:

```sh
Created a new local CA 💥
The local CA is now installed in the system trust store! ⚡️
The local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! 🦊
```

## Create Cert

```sh
mkdir local-ssl
cd local-ssl
mkcert localhost
```

Result:

```sh
Created a new certificate valid for the following names 📜
 - "localhost"

The certificate is at "./localhost.pem" and the key at "./localhost-key.pem" ✅

It will expire on 18 February 2027 🗓
```

## Define in Nginx proxy for API


## Define in vite for Quasar front end app

