# docker-machine rm arwena1 --force

# docker-machine create --driver virtualbox arwena1
# docker-machine regenerate-certs  --force arwena1 
eval $(docker-machine env arwena1)

docker rm   gate --force
docker rmi gate --force

docker build -t gate .


docker run -p 80:80 --name gate -d gate
docker logs -t -f gate
# docker exec -it gate sh


