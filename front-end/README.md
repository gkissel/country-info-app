# Front-End Solution 

## Description

The application is a React (Next.js) application that consumes the API endpoints created in the Back-End solution.

----

## Tasks 
   
- [x] **Country List Page**:
    - Display a list of countries fetched from the endpoint.
    - Each country name should be clickable and navigate the user to the Country Info Page.

- [x] **Country Info Page**:
    - Display detailed information about the selected country, including:
        - **Country Name**: Displayed prominently at the top.
        - **Country Flag**: Displayed alongside the country name using the URL fetched from the backend.
    - **Border Countries Widget**:
        - Show a list of countries that border the selected country.
        - Each border country name should be clickable and navigate the user to the corresponding Country Info Page.
    - **Population Chart**:
        - Implement a chart that shows the country’s population over time.
        - The X-axis should represent years, and the Y-axis should represent the population.






## How to run

- Make sure that you have node.js installed in your machine (version 16+)

### Install the dependencies

```bash

npm install

# or

yarn install

# or 

pnpm install # recomended

```


### Start the server in development mode

Get sure that the port `3000` is free.

If not, Next.js will automatically assign a free port.

If the backend is running in a different port, change the port number in the `env.local` file.
```dotenv
BACKEND_API_URL=http://localhost:3333 # Default value
```

```bash

npm run dev

# or

yarn dev

# or

pnpm dev # recomended

```

-----

### Start the server in production mode

```bash

npm run build

npm run start

# or

yarn build

yarn start

# or

pnpm build # recomended

pnpm start # recomended

```

### Access the application

[Aplication](http://localhost:3000)



