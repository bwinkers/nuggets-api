
# Installs openresty-opm and then uses opm to install auto SSL cert capability.
#

FROM openresty/openresty:latest

LABEL maintainer="Brian Winkers <bwinkers@gmail.com>"

RUN DEBIAN_FRONTEND=noninteractive apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        openresty-opm \
    && opm get fffonion/lua-resty-acme