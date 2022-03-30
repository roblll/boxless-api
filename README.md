# Boxless - Backend API

Web app available at

https://boxlessmusic.com/?username=rob&password=lenon

## Description

Stream the top songs from a selected date range and genres. The app randomly picks songs on the Billboard chart then plays it in YouTube based on the user's selected preference, including chart range (1 - 100), date range (from 1960 - present), and genre (Alternative, Country, Dance, Electronic, Latin, Pop, Rap, R&B, and Rock). The app will continuously load and play songs. There are additional features including: no repeats, clean version, play the music video, audio, or lyrics version, and limit the song's play length. The controls section displays the current song and allows the play/pause/previous/next functionality. There is a tab navigation on the bottom. The first tab shows the main controls, options and the video player. The next tab allows the user to select between random 2 videos to add to the playlist queue. The third allows the user to search for a specific song and add to the playlist queue. The fourth shows all the songs that have been added to the playlist and the current song playing.

## Backend API Implementation

The backend receives a request from the frontend. It first checks if the token provided is valid. Next, it will return a random video based on the options selected, including genre, date range, chart range and more. First, the app will get a random chart, then use the Billboard API to get the entire list of songs. The app will get a random song from the chart. Then, it will take that song and the YouTube API to get the youtube video id. Then the backend will return the data to the frontend. Both the Billboard and YouTube APIs perform a webscrape to retrieve the data. To improve performance, the Billboard API results are stored in a database. Next time the same chart and date is needed, the app first checks if it already exists in the database. This allows the app to skip the webscrape and just return the stored data in the database. Similar logic is used to implement the pick and search functionality. There were some features removed after tests concluded that they were not needed. This includes the Reddit API. The app previously had more genres added that obtained data from music subreddits. This was removed after realizing the poor quality of songs provided. Also, the previous versions of the app used Puppeteer to get data. This was removed, as it degrades the speed and reliability of the webscrape. It was too resource intensive because it loaded the request in a virtual browser. The app was converted to use a simple webscrape using Axios instead. This increased the consistency and speed of the app.

Built using: JavaScript, NodeJS, Express, PostgreSQL, Heroku
