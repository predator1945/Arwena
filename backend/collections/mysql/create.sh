docker rm -f collectionsDB 

docker run --name=collectionsDB \
	--env-file ./.env \
	-p 3306:3306  \
	-d mysql/mysql-server --default-authentication-plugin=mysql_native_password
	
