Feature: check the all functions of Cancelation flow for all users

@Marketuser1
Scenario: Rise a Cancelation Request with Market User1

Given enter url application into "browser" for full cancelation flow
When Market User1 login with valid creditinals for full cancelation process
Then Rise a Cancelation Request with User1 456
Then logout MarketUser1 after rise a full cancelation process

@RPMuser1
Scenario: Check the status of the Canclation apllication for with RPM User1

When RPM User1 login with valid creditinals for full cancelation process
Then check the "Approve" status a Cancelation Request with User1 456
Then logout RPM User1 after rise a full cancelation process

@NOCuser1

Scenario: 