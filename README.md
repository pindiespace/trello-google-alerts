# trello-google-alerts
Integrate trello boards with specified keywords in Google Alerts

# steps in integration
1. Login using Trello api
2. Store keys using redis
3. User select a Google Alert feed associated with Trello Board
4. Request any new data from Google Alerts
5. Parse Google Alerts data
6. Organize by keyword and time, including reference URL for mention
7. Store hits and urls in time-ordered sequence
8. Display to user
9. User can navigate link to read or respond
10.Responses also recorded

# reference

Foundation npm
https://www.npmjs.com/package/zurb-foundation-5

SASS Install and config
http://thesassway.com/beginner/getting-started-with-sass-and-compass

Removing git dependencies
http://stackoverflow.com/questions/10067848/remove-folder-and-its-contents-from-git-githubs-history

API Keys
https://trello.com/app-key

Integrating Redis with Node
@link http://www.sitepoint.com/using-redis-node-js/


