# Use newer Debian base (Bullseye)
FROM node:lts-bullseye

# Install required packages
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install && npm install -g qrcode-terminal pm2

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]
