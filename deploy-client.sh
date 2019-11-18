docker build --no-cache -t ecomm-client .
docker stop ecomm-client-container
docker rm ecomm-client-container
docker run -p 4200:80 -d -it  --name ecomm-client-container ecomm-client

