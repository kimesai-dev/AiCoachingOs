# Simple Dockerfile building the backend service
FROM node:18
WORKDIR /app
COPY backend/package.json backend/package-lock.json* ./backend/
RUN cd backend && npm install --production
COPY backend ./backend
WORKDIR /app/backend
CMD ["node", "dist/index.js"]
