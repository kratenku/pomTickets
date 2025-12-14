import { After, Before } from "@cucumber/cucumber";
import { Browser, Page, chromium} from '@playwright/test'
import { runner } from './runner';

Before(async function (this: runner) {
this.browser = await chromium.launch({
headless: false,
slowMo: 50
});


this.context = await this.browser.newContext({
viewport: { width: 1920, height: 1080 }
});


this.page = await this.context.newPage();
});

//metodo durante la ejecución de la prueba que instancia el navegador en este caso chrome


After(async function (this: runner) {
await this.page.close();
await this.context.close();
await this.browser.close();
// metodo para la ejecución posterior a la prueba
});