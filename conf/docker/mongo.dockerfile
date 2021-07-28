FROM mongo:3.6

COPY ./conf/db/db.js /docker-entrypoint-initdb.d
