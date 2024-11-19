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
mkdir ./proxy/dev/certs
cd ./proxy/dev/certs
mkcert localhost
```

Result:

```sh
mkcert api.localhost
```

```sh
Created a new certificate valid for the following names 📜
 - "api.localhost"

The certificate is at "./api.localhost.pem" and the key at "./api.localhost-key.pem" ✅

It will expire on 19 February 2027 🗓
```

## Define in Nginx proxy for API


## Define in vite for Quasar front end app

