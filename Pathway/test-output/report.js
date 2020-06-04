$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/CancelationFlow.feature");
formatter.feature({
  "line": 1,
  "name": "check the Functionlaity of  signal Cancelation flow of the pathway tool",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a cancelation request with Market user",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool;rise-a-cancelation-request-with-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Enter Url of application into the \"chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Market user loginwith valid credtinals for Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rise a Cancelation request with Marketuser 213",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Logout MarketUser after rise a request for  Cancelation",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 35
    }
  ],
  "location": "Cancleationflow.enter_Url_of_application_into_the_browser(String)"
});
formatter.result({
  "duration": 42713902100,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.market_user_loginwith_valid_credtinals_for_Cancelation_process()"
});
formatter.result({
  "duration": 13667054400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "213",
      "offset": 43
    }
  ],
  "location": "Cancleationflow.rise_a_Cancelation_request_with_Marketuser(int)"
});
formatter.result({
  "duration": 7021814000,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_MarketUser_after_rise_a_request_for_Cancelation()"
});
formatter.result({
  "duration": 6509059800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check the status of Cancelation Request with RPM user",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool;check-the-status-of-cancelation-request-with-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "RPM user login with valid credtinals for Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "RPM user \"Approved\" Cancelation signal with 211",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Logout RPM user after check the status of cancelation request",
  "keyword": "Then "
});
formatter.match({
  "location": "Cancleationflow.rpm_user_login_with_valid_credtinals_for_Cancelation_process()"
});
