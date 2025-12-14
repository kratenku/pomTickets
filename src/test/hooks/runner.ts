import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';


export class runner { // clase que funciona como interface para las acciones internal del
browser!: Browser;
context!: BrowserContext;
page!: Page;
}


setWorldConstructor(runner);