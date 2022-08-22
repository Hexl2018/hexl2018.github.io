---
toc: 'menu'
---


# Docker 安装启动命令

## redis
```shell
docker pull redis
docker run -d --name redis -p 6379:6379 redis --requirepass "1234!@#$qwerQWER"
```

## nocos-server
```shell
docker pull nacos/nacos-server
docker run --env MODE=standalone --name nacos -d -p 8848:8848 nacos/nacos-server
## 测试命令
curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=portal&group=DEFAULT_GROUP"
```

## mongo
```shell
# 拉取镜像
docker pull mongo:latest
docker run -itd --name mongo -p 27017:27017 mongo --auth
$ docker exec -it mongo mongo admin
# 创建一个名为 root，密码为 123456 的用户。
>  db.createUser({user:"root",pwd:"123456",roles:[{role:"root",db:"admin"}]});
# 尝试使用上面创建的用户信息进行连接。
> db.auth('root', '123456')
# 切换数据库
> use appmsg
# 授权用户
> db.createUser({user:"sibe",pwd:"123456",roles:[{role:"readWrite",db:"appmsg"}]});
# 创建集合
> db.createCollectin('msg')
```

## elasticsearch

```shell
docker pull elasticsearch 
docker run -e ES_JAVA_OPTS="-Xms256m -Xmx256m" -e "discovery.type=single-node" -d -p 9200:9200 -p 9300:9300 -p 5601:5601 --name lasticsearch 5acf0e8da90b
```

## nodejs

```shell
docker pull node
docker run -i -t -v /d/opt/:/win10/ -p 8080:8080  --name nodejs   node /bin/bash
```

## mysql

```shell
docker pull mysql
docker run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql --lower_case_table_names=1  
```