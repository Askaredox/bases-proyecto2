#!/bin/sh

# Antes de correr
## chmod +x start.sh

cd bases-proyecto2
sudo docker-compose -f "docker-compose.yaml" up -d --build
sudo docker ps
echo Está listo!