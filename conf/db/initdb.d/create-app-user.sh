#!/bin/bash
# https://www.stuartellis.name/articles/shell-scripting/#enabling-better-error-handling-with-set
set -Eeuo pipefail
    
# Based on mongo/docker-entrypoint.sh
# https://github.com/docker-library/mongo/blob/master/docker-entrypoint.sh#L303

mongosh -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase "$rootAuthDatabase" "$MONGO_INITDB_DATABASE" < /docker-entrypoint-initdb.d/charge-db.js

# if [ "$MONGO_INITDB_USERNAME" ] && [ "$MONGO_INITDB_PASSWORD" ]; then
#     "${mongo[@]}" -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD" --authenticationDatabase "$rootAuthDatabase" "$MONGO_INITDB_DATABASE" <<- charge-db.js