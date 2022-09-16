CREATE DATABASE flightApp;

CREATE TABLE country(
    country_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
);


CREATE TABLE airlines(
    airlines_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    country_id int FOREIGN KEY,
);

  "airlines": [
    {
      "id": "1",
      "name": "Lufthansa",
      "country_id": 1
    },
    {
      "id": "2",
      "name": "Ryanair",
      "country_id": 1
    },
    {
      "id": "3",
      "name": "Air France",
      "country_id": 4
    }
  ],
  "airports": [
    {
      "id": "1",
      "name": "Berlin Brandenburg Airport",
      "city": "Berlin",
      "country_id": 1
    },
    {
      "id": "2",
      "name": "Jorde Chavez International Airport",
      "city": "Lima",
      "country_id": 3
    },
    {
      "id": "3",
      "name": "Charles de Gaulle Airport",
      "city": "Paris",
      "country_id": 4
    }
  ],
  "flights": [
    {
      "id": 1,
      "destination_id": 1,
      "destination_name": "Berlin Brandenburg Airport",
      "start_id": 3,
      "start_name": "Charles de Gaulle Airport",
      "airline_id": 3,
      "airline_name": "Air France",
      "date": "25-05-2022",
      "price": 235
    },
    {
      "id": 2,
      "destination_id": 2,
      "destination_name": "Jorde Chavez International Airport",
      "start_id": 1,
      "start_name": "Berlin Brandenburg Airport",
      "airline_id": 1,
      "airline_name": "Lufthansa",
      "date": "07-05-2022",
      "price": 134
    },
    {
      "id": 3,
      "destination_id": 3,
      "destination_name": "Charles de Gaulle Airport",
      "start_id": 1,
      "start_name": "Berlin Brandenburg Airport",
      "airline_id": 1,
      "airline_name": "Lufthansa",
      "date": "25-05-2022",
      "price": 150
    },
    {
      "id": 4,
      "destination_id": 1,
      "destination_name": "Berlin Brandenburg Airport",
      "start_id": 2,
      "start_name": "Jorde Chavez International Airport",
      "airline_id": 3,
      "airline_name": "Air France",
      "date": "17-08-2022",
      "price": 785
    }
  ]
}