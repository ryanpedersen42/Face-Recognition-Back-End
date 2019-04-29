\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'

--dummy data for tests
\i '/docker-entrypoint-initdb.d/seed/seed.sql'