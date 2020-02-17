-- Deploy fresh db tables:
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'

-- testing.. this file will add dummy data
\i '/docker-entrypoint-initdb.d/seed/seed.sql'