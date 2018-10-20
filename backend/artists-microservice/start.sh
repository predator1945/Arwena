# docker-machine rm arwena1 --force

# docker-machine create --driver virtualbox arwena1
# docker-machine regenerate-certs  --force arwena1 
eval $(docker-machine env arwena1)

docker rm   artists --force
docker rmi artists --force

docker build -t artists .


docker run -p 3002:3002 --name artists -d artists
docker logs -t -f artists
# docker exec -it artists sh


