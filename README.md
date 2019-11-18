# eCommClient
eCommClient AngularJs App

# Clone the APP

Run following command 

```
ng serve
```

## Commads helpful

docker stop ecomm-clinet-container


### Docker Image build
```
docker build --no-cache -t ecomm-client .
```

Output like this

```
Sending build context to Docker daemon  30.39MB
Step 1/6 : FROM node:alpine AS builder
 ---> f20a6d8b6721
Step 2/6 : WORKDIR /app
Removing intermediate container c09f463b197e
 ---> cf50a49ea8b8
Step 3/6 : COPY . .
 ---> 42de9a16eba9
Step 4/6 : CMD  npm install http-server -g
 ---> Running in 9955128e1351
Removing intermediate container 9955128e1351
 ---> 3148bf94d711
Step 5/6 : WORKDIR /app/public_html
Removing intermediate container 3ce32c9108e7
 ---> 9060b6c3b91b
Step 6/6 : CMD ["http-server" "-o"]
 ---> Running in 9054ce905ab2
Removing intermediate container 9054ce905ab2
 ---> e01fc1a4f4d9
Successfully built e01fc1a4f4d9
Successfully tagged ecomm-client:latest

```

```
[ram@localhost eCommClient]$ docker stop ecomm-clinet-container
ecomm-clinet-container
[ram@localhost eCommClient]$ docker rm ecomm-clinet-container
ecomm-clinet-container
[ram@localhost eCommClient]$ docker run -p 4200:80 -d -it  --name ecomm-clinet-container ecomm-client
e062edbc70acd45955c42b4312a58fb96be06f4ab6d3f75e2472bbf969857882
[ram@localhost eCommClient]$

```


