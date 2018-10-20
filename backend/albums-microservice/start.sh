# docker-machine rm arwena1 --force

# docker-machine create --driver virtualbox arwena1
# docker-machine regenerate-certs  --force arwena1 
eval $(docker-machine env arwena1)

# node index.js
# node app.js

docker rm   albums --force
docker rmi albums --force

docker build -t albums .


docker run -p 3001:3001 -l="route=/albums" -l="port=3001" --name albums -d albums
# sleep 2
docker logs -t -f albums
# docker exec -it albums sh
# docker ps -a


