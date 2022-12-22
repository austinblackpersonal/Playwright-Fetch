# Playwright-Fetch
Playwright tests for Fetch Take Home Assignment

# Instructions

## Installing Node
- Make sure you're computer has node installed. You can check by opening up your terminal and typing "node".
- If you didn't get a message saying "Welcome to Node.js", you can download and install node here: https://nodejs.org/en/download/

## Installing Playwright
- Next, we'll install playwright onto our system
- Open up your terminal and run the following command and then select the following options
  - ```npm init playwright@latest```
  - Do you want to use TypeScript or JavaScript? ```JavaScript```
  - Where to put your end-to-end tests? ```e2e```
  - Add a GitHub Actions workflow? ```false```
  - Install Playwright browsers ```true```
  
- Once playwright is fully installed, we can run our test

## Running our test
- Navigate to where you cloned this repo onto your machine
- Run this command in your terminal
  - ```npx playwright test```
  - you can add the flag ```--headed``` if you want to see the test ran in headed mode
