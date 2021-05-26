# Lab8_Starter

## Authors
Amanda Quach

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No because unit testing only allows debugging on a small scale. Testing the 'message' feature will require testing that allows interaction between different components on an application/ feature level.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
Yes because testing the "max message length" is a small part of the feature which is only one component of the feature, and unit testing allows small scale debugging. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
If we set it to true, we will not be able to see how Puppeteer drives our browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
beforeAll(async () => { 
    await page.click('header > img'); 
})
