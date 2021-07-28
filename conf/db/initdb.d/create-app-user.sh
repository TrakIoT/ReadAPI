#!/bin/bash
set -Eeuo pipefail

mongosh -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase "$rootAuthDatabase" "$MONGO_INITDB_DATABASE" < /docker-entrypoint-initdb.d/charge-db.js