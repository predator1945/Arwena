# docker-machine rm arwena1 --force

# docker-machine create --driver virtualbox arwena1
# docker-machine regenerate-certs  --force arwena1 
eval $(docker-machine env arwena1)

docker rm   collections --force
docker rmi collections --force

docker build -t collections .


docker run -p 3003:3003 --name collections -d collections
docker logs -t -f collections
# docker exec -it collections sh


