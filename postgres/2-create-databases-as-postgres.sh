#!/bin/bash
set -e
export PGPASSWORD=$SUPERTOKENS_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$SUPERTOKENS_USER" --dbname "postgres" <<-EOSQL
    CREATE DATABASE $SUPERTOKENS_DB_NAME;
EOSQL