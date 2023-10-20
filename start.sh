# script para Iniciar con docker automaticamente en linux
# Parar el container
sudo docker container stop estilo-propio
sudo docker container rm estilo-propio

#Correr el container
sudo docker-compose -f docker-compose.prod.yml up --build -d
# Mensaje del que contenedor paro
echo "estilo-propio esta corriendo"