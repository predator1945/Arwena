# docker-machine rm arwena1 --force

# docker-machine create --driver virtualbox arwena1
# docker-machine regenerate-certs  --force arwena1 
eval $(docker-machine env arwena1)

docker rm   streaming --force
docker rmi streaming --force

docker build -t streaming .


docker run -p 3004:3004 -l="route=/songs" -l="port=3004" --name streaming -d streaming
docker logs -t -f streaming
# docker exec -it streaming sh


