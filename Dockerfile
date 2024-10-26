# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Gatsby site, generating the public folder
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Serve the public folder using a static server
RUN npm install -g serve
CMD ["serve", "-s", "public", "-l", "8080"]