FROM cypress/included:13.11.0
RUN mkdir /workspace
WORKDIR /workspace
RUN chmod -R 777 ./
RUN chmod -R 777 /workspace
COPY package.json ./
RUN npm install
COPY . .