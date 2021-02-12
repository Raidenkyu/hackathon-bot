# City Guide Bot
## Description
The bot developed for the Talk a Bit Hackathon.

* A chatbot that gives information about the cultural landmarks of the Porto city.
* This project is aimed at students that move to Porto to begin their university life.
* To students that have to move to the Porto city to attend the university, getting to know the city is important to feel that they are not out of place and disconnected from the environment around them. By getting to know the city culture, they become more attached and feel more comfortable away from their home, being more adapted to the new reality. A chatbot that can recommend culture centers in the Porto city can fit this purpose, and help mobility students to find out more about the city.

## Video demonstration
[Click here to see the video demonstration](https://drive.google.com/file/d/1v5J_ulrVRksv-oCdV8Tlu2Afo8_YIyq8/view?usp=sharing)

## Screenshots
![](https://i.imgur.com/7QhfuAT.png)

## Project architecture / Design decisions
This project was built using [Botkit](https://botkit.ai/). It automatically generates template project to develop chatbots, and offers intuitive libraries to program the conversations of said bot.

Another cool feature is the easy integration with the following platforms to deploy the bots:
* Websocket and Webhooks
* Webex Teams
* Slack
* Google Hangouts
* Twilio SMS
* Facebook Messenger
* Microsoft Teams

But for now, everything will be tested locally, which can be accessed through http://localhost:3000, when the project is running.

## Dependencies

* [NodeJS LTS](https://nodejs.org/en/)

## Setup
### Install Node Modules
```bash=
$ npm install
```

### Install Dev Dependencies
```bash=
$ npm install --only=dev
```
### Run bot
```bash=
$ npm run bot
```

To interact with the bot, just go to http://localhost:3000

### Run bot with hot reload
```bash=
$ npm start
```

Similar to the previous one, but with hot reload activated, which means that any saved modification to the source code will immediattly update the bot. It requires the `dev dependencies` to work.

To interact with the bot, just go to http://localhost:3000
