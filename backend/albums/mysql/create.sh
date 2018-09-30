docker rm -f albumsDB 

docker run --name=albumsDB \
	--env-file ./.env \
	-p 3307:3306  \
	-d mysql/mysql-server --default-authentication-plugin=mysql_native_password
	
