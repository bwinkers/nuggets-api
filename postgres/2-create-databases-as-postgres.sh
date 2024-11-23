#!/bin/bash
set -e
export PGPASSWORD=$API_PGPASSWORD;
psql -v ON_ERROR_STOP=1 --username "$API_PGUSER" --dbname "postgres" <<-EOSQL
    CREATE DATABASE $API_PGDATABASE;
EOSQL