# Stage 1: Builder
FROM node:18 AS builder
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Salin seluruh project
COPY . .

# Jalankan build
RUN npm run build

# Stage 2: Production runner
FROM node:18 AS runner
WORKDIR /app

# Salin hanya hasil build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/tsconfig.json ./

EXPOSE 3000
CMD ["npm", "start"]
