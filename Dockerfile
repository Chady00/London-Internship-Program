FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app-WORKDIR
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build


### Multi Stage build :

#second stage
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app-WORKDIR

#copying the build from the first stage
COPY --from=BUILD_IMAGE /app/react-app-WORKDIR/dist /app/react-app-WORKDIR/dist

#Expose
EXPOSE 8080
COPY package.json .
COPY vite.config.ts .
RUN npm install typescript

EXPOSE 8080
CMD ["npm", "run","preview"]