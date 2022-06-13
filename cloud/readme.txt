https://console.cloud.yandex.ru/folders/b1ggmp0ur8c7ja1veb4q/compute/instance/fhmhliqij942iob7bedp/edit

Сетевой интерфейс
Внутренний IPv4
10.128.0.5
Публичный IPv4

51.250.92.149
Подсеть
default-ru-central1-a


hooper
Dmitriev21!4342#_

ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAqr/5ZbI94s/MayYyJxYOG5dMgvXvfGI0fk1VbtjAdsjHGXtF5viIbUNAraMji4gCuLuO6NOPqsT0FmE1dUNI1bVHYqcIXX712P+ZYhTm9MLbVDZzSXZRAafvTWxGwnP3oxqcnNbQ3EimnS1g/mURbI+IPCFXmnXinfl9YWqyG21YrI6onpxHrh5tvITezYlhf3ihlYAG3/hbi9+2JKkrFp4vKAwgfkPT3//JXEcZvQVR3zVszy1cHq5UbtxCwxzWQkmA0PQRUteSoddRn24rjm+tJp6LEus1SBMmO0UBt2/jaZTgihQxZiJDmfN1Qx5adsAq/zPVgcjiBm8q33jLPQ== rsa-key-20220612


ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDIcPe4N+DkPB4aFS3xthgPP3v7Xqzy0kvTb+eKuv8L1yfQOH4TslJBQw8Z5Lpjq7zrnx6mQnjjIvGM7X2iqxsEp1Dmhg2r4frYM6Ee6/kAZZXFnWuvwR5OFbx++WgKLnHXDepexfasT/SPh+y3fwyDdS0TPm/ekWuiF3VJGoA4QDLRADAedmu/adk6RbDu7S24Nw///iNycKi1RA+bXgs4ZjLh3kTU54NYa25AB0B7zlmy5NKy85TOzKohyp00IcuzITLFUpUC6NLj7Kta74QKBYi8Pz7cPl07YPB2DeYJRkn7Z5SDD+zrsvJYdqkzNyy0tf4a1yUKiXqDv7mdQgcnlXRUunUQQKOTpHikklgg5Sy6v51pDUMGIFxLjDOyXxR5U4tVs/MLcHlNDs/OEwTdghoGvbRrlPNN7pHK6q7Cbd8Ae9PTEknFBkOmkRdbx4neiTMIVW5ZlH6OTsH7/P85FEqJT807/Zdj+kuyNCijiumNvB1C7+nrLc+hIVN+HTU= console@console

sudo su - hooper

ssh praktikum@51.250.92.149
sudo useradd -m -d /home/praktikum -s /bin/bash praktikum
sudo su - praktikum

echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDIcPe4N+DkPB4aFS3xthgPP3v7Xqzy0kvTb+eKuv8L1yfQOH4TslJBQw8Z5Lpjq7zrnx6mQnjjIvGM7X2iqxsEp1Dmhg2r4frYM6Ee6/kAZZXFnWuvwR5OFbx++WgKLnHXDepexfasT/SPh+y3fwyDdS0TPm/ekWuiF3VJGoA4QDLRADAedmu/adk6RbDu7S24Nw///iNycKi1RA+bXgs4ZjLh3kTU54NYa25AB0B7zlmy5NKy85TOzKohyp00IcuzITLFUpUC6NLj7Kta74QKBYi8Pz7cPl07YPB2DeYJRkn7Z5SDD+zrsvJYdqkzNyy0tf4a1yUKiXqDv7mdQgcnlXRUunUQQKOTpHikklgg5Sy6v51pDUMGIFxLjDOyXxR5U4tVs/MLcHlNDs/OEwTdghoGvbRrlPNN7pHK6q7Cbd8Ae9PTEknFBkOmkRdbx4neiTMIVW5ZlH6OTsH7/P85FEqJT807/Zdj+kuyNCijiumNvB1C7+nrLc+hIVN+HTU= console@console" > /home/praktikum/.ssh/authorized_keys



react-burger.gitapp.ru
Токен: 1dc390b3-385f-48da-8e76-7861288ad136
ID: react-cohort-12

hooper21.nomoredomains.xyz
51.250.92.149
hooper21.students.nomoredomains.xyz

sudo chmod -R 0777 /etc/nginx
sudo chmod -R 0777 /home/hooper/react-burger

sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default