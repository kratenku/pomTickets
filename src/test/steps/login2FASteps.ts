import { Given, When, Then } from '@cucumber/cucumber';
import { login2FA } from '../pages/login2FA';

let login: login2FA;

Given('I am on the login page', async function () {
  await login.openTicketPage();
});

When(
  'I am sign in whith {string} and {string}', async function (email: string, password: string) {
    await login.loginPage(email,password);
  }
);

When('Send 2FA code whit 6 chars {string}', async function () { 
    await login.button2fa();
});

When('Five attemps sign user {string}', async function (fa2code: string) {
   await login.send2FA(fa2code)
});

When('Register code', async function (fa2code: string) {
  await login.send2FA(fa2code);
});

Then('I should see the dashboard', async function () {
  await login.validateDashboard();
});

Then('I not should see the dashboard', async function () {
  await login.validateIncorrectDashboard();
});

Then('I not should see the dashboard and block user', async function () {
  await login.validateIncorrectDashboard();
});
