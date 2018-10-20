eval $(docker-machine env arwena1)

docker rm mongodb --force
# docker run -it --entrypoint 'mongod --bind_ip_all' --hostname MONGODB --name=MONGODB --net=bridge --expose=27017 -e MONGO_INITDB_ROOT_USERNAME=user -e  MONGO_INITDB_ROOT_PASSWORD=pass mongo

docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e  MONGO_INITDB_ROOT_PASSWORD=pass --expose=27017 mongo
# docker-compose -f mongo.yml up
sleep 2

docker ps -a
docker logs -t -f mongodb 
# docker exec -it mongodb sh