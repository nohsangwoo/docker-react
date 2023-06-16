# build

$ docker build -t react-image .

$ docker build -f Dockerfile.dev -t noh/react-image ./

# cli

$ docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --network mynetwork --name react-app noh/react-image

$ docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --network mynetwork --env-file ./.env --name react-app noh/react-image

# develop

$ docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

# production

$ docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
