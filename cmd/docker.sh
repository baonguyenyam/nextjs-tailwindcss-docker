docker build -t nextjs-docker .
docker tag nextjs-docker:latest nextjs-docker:latest
docker push nextjs-docker:latest
docker run -d --name nextjs-docker -p 80:3000 nextjs-docker:latest