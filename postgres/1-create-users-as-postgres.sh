#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER"  <<-EOSQL
  BEGIN;
    CREATE USER $API_USER WITH PASSWORD '$API_PASS';
    ALTER USER $API_USER CREATEDB;
  COMMIT;
EOSQL



