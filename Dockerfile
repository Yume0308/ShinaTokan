# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# Generate Database
RUN npx prisma Generate

# Build the Next.js app
RUN npm run build

# Start the app
CMD ["npm", "run", "start"]
