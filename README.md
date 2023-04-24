docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --name react-app react-image

# 환경변수 추가.

docker run -v $(pwd)/src:/app/src:ro -d -p 3002:3000 --env-file ./.env --name react-app react-image
