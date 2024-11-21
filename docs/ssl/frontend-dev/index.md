# Quasar SSL dev certs

```sh
devServer: {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, './src/certs/localhost-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, './src/certs/localhost.pem')),
      },
      // Make sure the server is accessible over the local network
      host: '0.0.0.0',
      open: true // opens browser window automatically
    },
```