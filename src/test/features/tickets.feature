Feature: Login with 2FA

    Scenario: Correct login whith valid credentials and 2FA 
        Given I am on the login page
        When I am sign in whith "ticketadmin@ticket.com" and "Correctpass123@"
        And Send 2FA code whit 6 chars
        And Register code "123456"
        Then I should see the dashboard
    

    Scenario: Incorrect login whith invalid code 2FA, five attemps
        Given I am on the login page
        When I am sign in whith "ticketadmin@ticket.com" and "Corretpass23@"
        And Send 2FA code whit 6 chars
        And Five attemps sign user "12345"
        Then I not should see the dashboard and block user
 