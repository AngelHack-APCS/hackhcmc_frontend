# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Copy the initialization scripts into the container
COPY 01_init.sql /docker-entrypoint-initdb.d/

COPY 02_data.sql /docker-entrypoint-initdb.d/

COPY 03_data.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
