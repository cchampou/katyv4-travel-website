FROM node:20-alpine

COPY . .

RUN corepack enable

RUN pnpm install

EXPOSE 8000

CMD ["pnpm", "start"]
