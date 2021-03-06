[To run this, in #Terminal => npm init -y, npm start]

My plan for this project is to have a map centred over Glasgow City centre, which adds a marker to the users current location, and using the Live Car Park Data from the Glasgow Open Data API, have markers at each of the car parks, displaying whether or not there are spaces available, and where possible, also display the number of spaces available.

In addition to this, I would like to calculate the distances from the users location to each of the car parks.
Another feature I would like to add is changing the colour of the car park marker when it is full.
I also need to change the colour of the marker of the user so they can see where they are relative to the car parks.

https://gcc.azure-api.net/traffic/carparks?format=json


# Weekend homework.

## Key learning to practise and/or revise:

 - Manipulating the DOM - selecting/creating/appending elements
 - Using event listeners to make our apps interactive
 - Making an HTTP request to retrieve some data and then using it

## Task:

Practise what we've done this week using JavaScript in the browser:

- Fetch information from an API.
- Display/Analyse the information in the browser using DOM manipulation/Charts/Maps/Canvas etc. Be creative!

GitHub user toddmotto maintains [a HUGE list of links to open APIs](https://github.com/toddmotto/public-apis) on many subjects. We _strongly_ recommend that you avoid APIs which require OAuth authentication. APIs which are listed as requiring an apiKey require a _little_ bit of extra work, but this should be documented by the API itself.

In particular we recommend:

  - REST countries: https://restcountries.eu/
  - Football Data: http://api.football-data.org/index - Make sure you sign up for a Free API key to use in your requests otherwise you may get CORS errors in Chrome.
  - OMDB - Film info: http://www.omdbapi.com/ - no key needed.
  - News API: https://newsapi.org/ - News stories from several different sources
  - Giphy API: https://github.com/Giphy/GiphyAPI - fun gifs! Free key provided.
  - Open Weather Map: http://openweathermap.org/api - Free API key on sign up.
  - Harry Potter: http://hp-api.herokuapp.com/
  - MusixMatch: https://developer.musixmatch.com/ - get info on music charts, artists and their music, lyrics. Free API key when you sign up.
