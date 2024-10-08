# Pokémon App
## Overview
The Pokémon App is a React application that allows users to search for Pokémon, view detailed information about them, and compare different Pokémon. It includes a variety of features such as error handling, dynamic data fetching, and responsive design. Here's link to the live site [Live site](https://pokedexmonn.netlify.app/).

![Home](https://github.com/user-attachments/assets/1cb34b4b-5b9f-4ed2-b4f7-9d3b12251c64)


## Features
Error Handling: Custom error page with status code handling and error messages.
Pokémon Comparison: Compare details of two Pokémon side by side.
Pokémon Details: View detailed information about a specific Pokémon.
Pokémon List: Display a list of Pokémon with search and error handling functionalities.

## Technologies Used
- React 
- TypeScript + Vite
- SCSS
- React Router DOM
- Redux (with React-Redux)
- GraphQL (for fetching Pokémon data)
- Jest (for testing)

## Components
### ErrorPage
A component that handles and displays error messages. It updates the document title based on the error status and provides a button to navigate back to the homepage.

### PokemonComparisonPage
Displays a comparison between two Pokémon. Fetches random Pokémon data and shows a comparison card for each Pokémon.

### PokemonDetailPage
Shows detailed information about a specific Pokémon, including its image, weight, height, and types.

### PokemonListPage
Displays a list of Pokémon with search functionality. Handles loading states, errors, and provides a way to navigate back to previous search results.

## Usage 

**1. Installation**

Clone the repository and install the dependencies:

` git clone https://github.com/Vicolas11/pokedex.git`

`cd pokedex`

`npm install` or `yarn`

**2. Setup environment file**

Rename the `.env.temple` file in the root directory to `.env` and then replace the value of `VITE_GRAPHQL_API` variable with your own backend URL.

**3. Running the App**

To start the development server, run:

`npm run dev` or `yarn dev`

Open **http://localhost:5173** in your browser to view the app.

**3. Testing**

To run the tests, use:

`npm test` or `yarn test`

**4. Build**

Run the command below to build the app for deployment or anything:
`npm run build` or `yarn build`

## Directory Structure
- `src/:` Contains all source code files.
- `components/:` Reusable UI components.
- `hooks/:` Custom React hooks.
- `pages/:` Page components for different routes.
- `graphql/:` GraphQL queries and mutations.
- `store/:` Redux store and slices.
- `utils/:` Utility functions.
- `assets/:` Static assets like images and logos.
