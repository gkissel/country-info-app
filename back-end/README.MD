# Back-End Solution 

## Description

The application consists of a database (SQLite) and a Node.js REST API (Express).

----

## Tasks 
   
- [ ] Endpoint: Get Available Countries:

    - Create an API endpoint, using Date Nager API `https://date.nager.at/api/v3/AvailableCountries`
    - This endpoint should return a list of    available      countries.

- [ ] Endpoint: Get Country Info:

    - Create an API endpoint to retrieve detailed information about a specific country.
    - This endpoint should provide the following data:

        a. List of Border Countries: A list of countries that share a border with the selected country https://date.nager.at/api/v3/CountryInfo/UA.

        b. Population Data: Historical population data for the country, suitable for plotting on a chart https://countriesnow.space/api/v0.1/countries/population
    
        c. Flag URL: A URL to the country’s flag image https://countriesnow.space/api/v0.1/countries/flag/images
