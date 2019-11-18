FROM nginx:alpine

WORKDIR /app
COPY ./public_html/ ./dist/
COPY package.json /app/package.json

COPY ./public_html /usr/share/nginx/html/

# Map your port to 80, default will be mapped 

# Following would be useful
# docker build --no-cache -t ecomm-client .
# docker stop ecomm-client-container
# docker rm ecomm-client-container
# docker run -p 4200:80 -d -it  --name ecomm-client-container ecomm-client
