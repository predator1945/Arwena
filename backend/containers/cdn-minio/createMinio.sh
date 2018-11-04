eval $(docker-machine env arwena1)

docker rm   cdn --force

docker run -p 5000:9000 --name cdn -d \
  -l="route=/cdn" -l="port=5000" \
  -e "MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE" \
  -e "MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  minio/minio server cdn

  docker logs -t -f cdn