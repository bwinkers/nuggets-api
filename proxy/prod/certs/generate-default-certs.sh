# create account key
    #openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out /etc/openresty/account.key
    openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out ./proxy/prod/certs/default/account.key
    # create fallback cert and key
    openssl req -newkey rsa:2048 -nodes -keyout ./proxy/prod/certs/default/default.key -x509 -days 365 -out ./proxy/prod/certs/default/default.pem