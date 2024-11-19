# Certbot commands 


## Create Hostname Certs
Test Certbot and hostname configs with `--dry-run`

```sh
docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d maxpets.com
```

Create a cert by omitting `--dry-run`

```sh
docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d www.premiumrv.space
```

## Renew Certs

```sh
docker compose run --rm certbot renew
```