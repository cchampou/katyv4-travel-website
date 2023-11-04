FROM node:latest

COPY . .

RUN npm i -g pnpm

RUN pnpm install

EXPOSE 8000

CMD ["pnpm", "start"]
