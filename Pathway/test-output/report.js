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
  "name": "Rise a Cancelation request with Marketuser 199",
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
  "duration": 28136673100,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.market_user_loginwith_valid_credtinals_for_Cancelation_process()"
});
formatter.result({
  "duration": 17358047600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "199",
      "offset": 43
    }
  ],
  "location": "Cancleationflow.rise_a_Cancelation_request_with_Marketuser(int)"
});
formatter.result({
  "duration": 46388979600,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_MarketUser_after_rise_a_request_for_Cancelation()"
});
formatter.result({
  "duration": 6954049700,
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
  "name": "RPM user \"Approved\" Cancelation signal",
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
formatter.result({
  "duration": 25925009200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 10
    }
  ],
  "location": "Cancleationflow.rpm_user_Cancelation_signal(String)"
});
formatter.result({
  "duration": 12369696000,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_RPM_user_after_check_the_status_of_cancelation_request()"
});
formatter.result({
  "duration": 7229147600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check the staus of the Cancelation Request with RRM user",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool;check-the-staus-of-the-cancelation-request-with-rrm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "RRM user login with valid credtinals for Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "RRM user \"Approved\" Cancelation Signal",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Logout RRM user after check the status of cancelation request",
  "keyword": "Then "
});
formatter.match({
  "location": "Cancleationflow.rrm_user_login_with_valid_credtinals_for_Cancelation_process()"
});
formatter.result({
  "duration": 26532705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 10
    }
  ],
  "location": "Cancleationflow.rrm_user_Cancelation_Signal(String)"
});
formatter.result({
  "duration": 12353094100,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_RRM_user_after_check_the_status_of_cancelation_request()"
});
formatter.result({
  "duration": 6894766800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Check the status of the Cancelation Request with NOC user",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool;check-the-status-of-the-cancelation-request-with-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "NOC user login with Vlaid credtinals for Cancletaion process",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "NOC user \"Rejected\" Cancelation signal",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Logout NOC user after suucesful check the status of Cancelation Process",
  "keyword": "Then "
});
formatter.match({
  "location": "Cancleationflow.noc_user_login_with_Vlaid_credtinals_for_Cancletaion_process()"
});
formatter.result({
  "duration": 26154127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 10
    }
  ],
  "location": "Cancleationflow.noc_user_Cancelation_signal(String)"
});
formatter.result({
  "duration": 18511038400,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_NOC_user_after_suucesful_check_the_status_of_Cancelation_Process()"
});
formatter.result({
  "duration": 6955572700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Check the status of the Cancelation Request Legal user",
  "description": "",
  "id": "check-the-functionlaity-of--signal-cancelation-flow-of-the-pathway-tool;check-the-status-of-the-cancelation-request-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "LEGAL user login with valid credtinals for Cancelation Process",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Request send to FCC with Legal user",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Logout LEGAL user after succesful Cancelation Request Send to FCC",
  "keyword": "Then "
});
formatter.match({
  "location": "Cancleationflow.legal_user_login_with_valid_credtinals_for_Cancelation_Process()"
});
formatter.result({
  "duration": 25950619500,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.request_send_to_FCC_with_Legal_user()"
});
formatter.result({
  "duration": 12359277400,
  "status": "passed"
});
formatter.match({
  "location": "Cancleationflow.logout_LEGAL_user_after_succesful_Cancelation_Request_Send_to_FCC()"
});
formatter.result({
  "duration": 6902519200,
  "status": "passed"
});
});