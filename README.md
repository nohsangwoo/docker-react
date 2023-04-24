# cli

$ docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --name react-app react-image

$ docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --env-file ./.env --name react-app react-image

# develop

$ docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

# production

$ docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
