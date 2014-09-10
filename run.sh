docker stop lamp; docker rm lamp

SRC=$HOME/data/docker/lamp
SRC_HTML=$SRC/html
SRC_SQL=$SRC/sql

FIL=""
if [[ -f "apache.conf" ]]; then
	FIL="-v $SRC/apache.conf:/etc/apache2/sites-available/000-default.conf"
fi

docker run --name lamp -d -e MYSQL_PASS="mypass" $FIL -v $SRC_HTML:/var/www/html -v $SRC_SQL:/var/lib/mysql -p 127.0.1.1:80:80 -p 127.0.1.1:3306:3306 sauloal/lamp
