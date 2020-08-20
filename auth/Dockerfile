#sudo docker build -t sanjeet_pal/auth .


FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]