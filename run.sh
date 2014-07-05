docker stop lamp; docker rm lamp

FIL=""
if [[ -f "apache.conf" ]]; then
	FIL="-v $PWD/apache.conf:/etc/apache2/sites-available/000-default.conf"
fi

docker run --name lamp -d -e MYSQL_PASS="mypass" $FIL -v $PWD/html/:/var/www/html -v $PWD/sql:/var/lib/mysql -p 127.0.1.1:80:80 sauloal/lamp
