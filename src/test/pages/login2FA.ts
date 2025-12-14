import { Page, Locator, expect } from '@playwright/test';
import { equal } from 'assert';

export class login2FA{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly twoFaInput: Locator;
    readonly submit2FAButton: Locator;
    readonly dashoard: Locator;


    constructor(page:Page){
        this.page = page;
        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByRole('button', { name: /submit/i });
        this.twoFaInput = page.getByTestId('2FAinput')
        this.submit2FAButton = page.getByRole('button', { name: /submit2FA/});
        this.dashoard = page.getByRole('alert', {name: /dashoard/})
    }

    async openTicketPage(){
        await this.page.goto("/login/");
    }

    
    async loginPage(_email: string, _password: string) { 
        await this.emailInput.fill(_email);
        await this.passwordInput.fill(_password);
        await this.loginButton.click();

   }

   async send2FA(_2faCode: string){
        await expect(
            this.twoFaInput.fill(_2faCode),
        )
   }

   async button2fa(){
        await this.submit2FAButton.click();
   }

   async validateDashboard(){

        await expect(
             this.twoFaInput
        )
    
   }

   async validateIncorrectDashboard(){

    let dashboard: "Welcome dashboard ticket"

    if(this.dashoard){
        await expect(
            dashboard
        )
    }else{
        console.log("Block user or not correcto sign")
    }
   }
}
