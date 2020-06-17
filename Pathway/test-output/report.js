$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/FullBuildOutflow.feature");
formatter.feature({
  "line": 1,
  "name": "check the all functions of BuildOutflow flow for all users",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a BuildOutflow Request with First Market User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-first-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Marketuser1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "enter url application into \"chrome\" for full BuildOutflow flow",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "First Market User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rise a BuildOutflow Request with  First Market User 2016 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logout  First MarketUser after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    }
  ],
  "location": "FullBuildoutflow.IntiationApplication(String)"
});
formatter.result({
  "duration": 40819869700,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.first_Market_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 8010902400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 52
    },
    {
      "val": "06-18-2020",
      "offset": 63
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_First_Market_User(int,String)"
});
formatter.result({
  "duration": 21966510000,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_First_MarketUser_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6775280100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check the status of the BuildOutflow apllication for with First RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-first-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@RPMuser1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "First RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "check the \"Approved\" status a BuildOutflow Request with First RPM User 2016",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "logout First RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.first_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 45107727400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2016",
      "offset": 71
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_First_RPM_User(String,int)"
});
formatter.result({
  "duration": 15390866400,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_First_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6875401800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check the status of the BuildOutflow apllication for with First NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-first-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@NOCuser1"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "First NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "check the \"Approved\" status a BuildOutflow Request with  First NOC User 2016",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "logout First NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.first_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 32569729500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2016",
      "offset": 72
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_First_NOC_User(String,int)"
});
formatter.result({
  "duration": 16770902700,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_First_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6907405800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Check the status of the BuildOutflow apllication for with First Legal User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-first-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@LegalUser1"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "First Legal User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Request send to FCC of BuildOutflow Request with  First Legal User 2016",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "logout First Legal User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.first_Legal_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 31296362900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 67
    }
  ],
  "location": "FullBuildoutflow.request_send_to_FCC_of_BuildOutflow_Request_with_First_Legal_User(int)"
});
formatter.result({
  "duration": 16756528000,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_First_Legal_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 9016770200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Rise a BuildOutflow Request with Second Market User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-second-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@MarketUser2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Second Market User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Rise a BuildOutflow Request with secondMarket User 2008 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "logout Second MarketUser after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.second_Market_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 30698031900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2008",
      "offset": 51
    },
    {
      "val": "06-18-2020",
      "offset": 62
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_secondMarket_User(int,String)"
});
formatter.result({
  "duration": 23086386400,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_Second_MarketUser_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7056086400,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Check the status of the BuildOutflow apllication for with Second RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-second-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@RPMuser2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Second RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "check the \"Rejeted\" status a BuildOutflow Request with Second RPM User 2008",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "logout RPM Second User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.second_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 30896026200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejeted",
      "offset": 11
    },
    {
      "val": "2008",
      "offset": 71
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_Second_RPM_User(String,int)"
});
formatter.result({
  "duration": 14920835700,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_RPM_Second_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7096172300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Rise a BuildOutflow Request with Third Market User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-third-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@MarketUser3"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Third Market User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Rise a BuildOutflow Request with  Third Market User 2009 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "logout  Third MarketUser after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.third_Market_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 31503990000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2009",
      "offset": 52
    },
    {
      "val": "06-18-2020",
      "offset": 63
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_Third_Market_User(int,String)"
});
formatter.result({
  "duration": 23281257100,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_Third_MarketUser_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7032674200,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Check the status of the BuildOutflow apllication for with Third RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-third-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@RPMuser3"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Third RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "check the \"Approved\" status a BuildOutflow Request with Third RPM User 2009",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "logout Third RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.third_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 32730123000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2009",
      "offset": 71
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_Third_RPM_User(String,int)"
});
formatter.result({
  "duration": 14940637700,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_Third_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6852497600,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Check the status of the BuildOutflow apllication for with Third NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-third-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 61,
      "name": "@NOCuser3"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Third NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "check the \"Rejected\" status a BuildOutflow Request with  Third NOC User 2009",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "logout  Third NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.third_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 32491852400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 11
    },
    {
      "val": "2009",
      "offset": 72
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_Third_NOC_User(String,int)"
});
formatter.result({
  "duration": 16806884800,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_Third_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7030974400,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Rise a BuildOutflow Request with fourth Market User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-fourth-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@MarketUser4"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "fourth Market User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Rise a BuildOutflow Request with  fourth Market User 2010 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "logout  fourth MarketUser after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fourth_Market_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 32475722600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 53
    },
    {
      "val": "06-18-2020",
      "offset": 64
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_fourth_Market_User_with(int,String)"
});
formatter.result({
  "duration": 23252734600,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fourth_MarketUser_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6786549400,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Check the status of the BuildOutflow apllication for with fourth RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-fourth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@RPMuser4"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "fourth RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "check the \"Approved\" status a BuildOutflow Request with fourth RPM User 2010",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "logout fourth RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fourth_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 30870428700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2010",
      "offset": 72
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_fourth_RPM_User(String,int)"
});
formatter.result({
  "duration": 14882403200,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fourth_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6845963200,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Check the status of the BuildOutflow apllication for with fourth NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-fourth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@NOCuser4"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "fourth NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "check the \"Approved\" status a BuildOutflow Request with  fourth NOC User 2010",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "logout  fourth NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fourth_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 32378632900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2010",
      "offset": 73
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_fourth_NOC_User(String,int)"
});
formatter.result({
  "duration": 16735238500,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fourth_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6811447900,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Rise a BuildOutflow Request with fifth RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-fifth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@RPMUSER5"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "fifth RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Rise a BuildOutflow Request with  fifth RPM User 2011 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "logout  fifth RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fifth_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 31531090000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2011",
      "offset": 49
    },
    {
      "val": "06-18-2020",
      "offset": 60
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_fifth_RPM_User_with(int,String)"
});
formatter.result({
  "duration": 17050257200,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fifth_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6756841400,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Check the status of the BuildOutflow apllication for with Fifth NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-fifth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 96,
      "name": "@NOCuser5"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "fifth NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "check the \"Approved\" status a BuildOutflow Request with  fifth NOC User 2011",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "logout  fifth NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fifth_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 31253538900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2011",
      "offset": 72
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_fifth_NOC_User(String,int)"
});
formatter.result({
  "duration": 16732700100,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fifth_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7752819600,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Check the status of the BuildOutflow apllication for with fifth Legal User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-fifth-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 103,
      "name": "@LegalUser5"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "fifth Legal User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "Request send to FCC of BuildOutflow Request with  fifth Legal User 2011",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "logout fifth Legal User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.fifth_Legal_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 34908357400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2011",
      "offset": 67
    }
  ],
  "location": "FullBuildoutflow.request_send_to_FCC_of_BuildOutflow_Request_with_fifth_Legal_User(int)"
});
formatter.result({
  "duration": 16921448800,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_fifth_Legal_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7116235300,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Rise a BuildOutflow Request with sixth RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-sixth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 110,
      "name": "@RPMUSER6"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "sixth RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "Rise a BuildOutflow Request with  sixth RPM User 2012 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "logout  sixth RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.sixth_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 35196859900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2012",
      "offset": 49
    },
    {
      "val": "06-18-2020",
      "offset": 60
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_sixth_RPM_User_with(int,String)"
});
formatter.result({
  "duration": 16941044800,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_sixth_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7110613300,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Check the status of the BuildOutflow apllication for with sixth NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-sixth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@NOCuser6"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "sixth NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "check the \"Rejcted\" status a BuildOutflow Request with  sixth NOC User 2012",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "logout  sixth NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.sixth_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 36881603600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejcted",
      "offset": 11
    },
    {
      "val": "2012",
      "offset": 71
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_sixth_NOC_User(String,int)"
});
formatter.result({
  "duration": 16901576700,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_sixth_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7154092500,
  "status": "passed"
});
formatter.scenario({
  "line": 125,
  "name": "Rise a BuildOutflow Request with seventh RPM User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;rise-a-buildoutflow-request-with-seventh-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 124,
      "name": "@RPMUSER7"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "seventh RPM User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Rise a BuildOutflow Request with  Seventh RPM User 2013 with \"06-18-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "logout  seventh RPM User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.seventh_RPM_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 37374373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2013",
      "offset": 51
    },
    {
      "val": "06-18-2020",
      "offset": 62
    }
  ],
  "location": "FullBuildoutflow.rise_a_BuildOutflow_Request_with_Seventh_RPM_User_with(int,String)"
});
formatter.result({
  "duration": 20232289600,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_seventh_RPM_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 6768195400,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Check the status of the BuildOutflow apllication for with seventh NOC User",
  "description": "",
  "id": "check-the-all-functions-of-buildoutflow-flow-for-all-users;check-the-status-of-the-buildoutflow-apllication-for-with-seventh-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 131,
      "name": "@NOCuser7"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "seventh NOC User login with valid creditinals for full BuildOutflow process",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "check the \"Approved\" status a BuildOutflow Request with  seventh NOC User 2013",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "logout  seventh NOC User after rise a full BuildOutflow process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullBuildoutflow.seventh_NOC_User_login_with_valid_creditinals_for_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 34406241700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2013",
      "offset": 74
    }
  ],
  "location": "FullBuildoutflow.check_the_status_a_BuildOutflow_Request_with_seventh_NOC_User(String,int)"
});
formatter.result({
  "duration": 16755531800,
  "status": "passed"
});
formatter.match({
  "location": "FullBuildoutflow.logout_seventh_NOC_User_after_rise_a_full_BuildOutflow_process()"
});
formatter.result({
  "duration": 7383898300,
  "status": "passed"
});
formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature");
formatter.feature({
  "line": 1,
  "name": "check the full Cancelation flow for all users",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a Full Cancelation Request with first Market User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-first-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Marketuser1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "enter url application into \"chrome\" for full cancelation flow",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "first Market User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rise a full Cancelation Request with first Market User 2107",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "logout first MarketUser after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    }
  ],
  "location": "FullCancelationflow.enter_url_application_into_for_full_cancelation_flow(String)"
});
formatter.result({
  "duration": 39468259500,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.first_Market_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 7867850100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2107",
      "offset": 55
    }
  ],
  "location": "FullCancelationflow.rise_a_full_Cancelation_Request_with_first_Market_User(int)"
});
formatter.result({
  "duration": 39511925100,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_first_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 6767679000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check the status of the  full Cancelation application with first RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the--full-cancelation-application-with-first-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@RPMuser1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "first RPM User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "check the \"Approved\" status a Cancelation Request with first RPM User 2107",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "logout First RPM User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.first_RPM_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 39279405600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2107",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_first_RPM_User(String,int)"
});
formatter.result({
  "duration": 4443303000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027TX Site ID\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49256}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0b6813f32ebd8b5f23a04cc6d3013ba3\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027TX Site ID\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Webpages.RequestViewPage.requestview(RequestViewPage.java:88)\r\n\tat com.Pathway.Users.RPMUser.CancelationrequestwithRPMuser(RPMUser.java:32)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.check_the_status_a_Cancelation_Request_with_first_RPM_User(FullCancelationflow.java:71)\r\n\tat ✽.Then check the \"Approved\" status a Cancelation Request with first RPM User 2107(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_RPM_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Check the status of the full Cancelation application  with First NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-application--with-first-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@NOCuser1"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "first NOC User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "check the \"Approved\" status a Cancelation Request with first NOC User 2107",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "logout First NOC User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.first_NOC_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 93666389000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[5] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithThirdaccount(Loginpage.java:73)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.first_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:85)\r\n\tat ✽.When first NOC User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:21)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[5]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithThirdaccount(Loginpage.java:73)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.first_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:85)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2107",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_first_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_NOC_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Check the status of the full cancelation application  with First Legal User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-application--with-first-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@LegalUser1"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "First Legal User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Request send to FCC of full cancelation process with  First Legal User 2107",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "logout First Legal User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.first_Legal_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 94971407500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[7] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithFourthaccount(Loginpage.java:78)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.first_Legal_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:110)\r\n\tat ✽.When First Legal User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:28)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[7]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithFourthaccount(Loginpage.java:78)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.first_Legal_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:110)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2107",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.request_send_to_FCC_of_full_cancelation_process_with_First_Legal_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_Legal_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "Rise a Full Cancelation Request with second Market User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-second-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Marketuser2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "second Market User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Rise a Cancelation Request with second Market User 2108",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "logout second MarketUser after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.second_Market_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90471355700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.second_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:134)\r\n\tat ✽.When second Market User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:35)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.second_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:134)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2108",
      "offset": 51
    }
  ],
  "location": "FullCancelationflow.rise_a_Cancelation_Request_with_second_Market_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_second_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Check the status of the full Cancelation application  with second RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-application--with-second-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@RPMuser2"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "second RPM User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "check the \"Rejected\" status a Cancelation Request with second RPM User 2108",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "logout second RPM User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.second_RPM_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 91401289900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.second_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:160)\r\n\tat ✽.When second RPM User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:42)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.second_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:160)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 11
    },
    {
      "val": "2108",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_second_RPM_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_second_RPM_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Rise a Full Cancelation Request with Third Market User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-third-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@Marketuser3"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "Third Market User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Rise a Cancelation Request with Third Market User 2109",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "logout Third MarketUser after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.third_Market_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90540649800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:183)\r\n\tat ✽.When Third Market User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:49)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:183)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2109",
      "offset": 50
    }
  ],
  "location": "FullCancelationflow.rise_a_Cancelation_Request_with_Third_Market_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_Third_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "Check the status of the  full Cancelation application with Third RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the--full-cancelation-application-with-third-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@RPMuser3"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "Third RPM User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "check the \"Approved\" status a Cancelation Request with Third RPM User 2109",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "logout Third RPM User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.third_RPM_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90861454000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:209)\r\n\tat ✽.When Third RPM User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:56)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:209)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2109",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_Third_RPM_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_Third_RPM_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 61,
  "name": "Check the status of the full Cancelation apllication  with Third NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-apllication--with-third-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@NOCuser3"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "Third NOC User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "check the \"Rejected\" status a Cancelation Request with Third NOC User 2109",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "logout Third NOC User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.third_NOC_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90525552800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:232)\r\n\tat ✽.When Third NOC User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:63)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:232)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 11
    },
    {
      "val": "2109",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_Third_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_Third_NOC_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "Rise a Full Cancelation Request with fourth Market User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-fourth-market-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@Marketuser4"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "fourth Market User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Rise a Cancelation Request with fourth Market User 2110",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "logout fourth MarketUser after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fourth_Market_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90939313300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:257)\r\n\tat ✽.When fourth Market User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:70)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:257)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2110",
      "offset": 51
    }
  ],
  "location": "FullCancelationflow.rise_a_Cancelation_Request_with_fourth_Market_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fourth_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 75,
  "name": "Check the status of the  full Cancelation application with fourth RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the--full-cancelation-application-with-fourth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@RPMuser4"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "fourth RPM User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "check the \"Approved\" status a Cancelation Request with fourth RPM User 2110",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "logout fourth RPM User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fourth_RPM_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90362084000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:282)\r\n\tat ✽.When fourth RPM User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:77)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:282)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2110",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_fourth_RPM_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fourth_RPM_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 82,
  "name": "Check the status of the full Cancelation apllication  with fourth NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-apllication--with-fourth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@NOCuser4"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "fourth NOC User login with valid creditinals for full cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "check the \"Approved\" status a Cancelation Request with fourth NOC User 2110",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "logout fourth NOC User after rise a full cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fourth_NOC_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 90792801900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:307)\r\n\tat ✽.When fourth NOC User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:84)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fourth_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:307)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2110",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_fourth_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fourth_NOC_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 89,
  "name": "Rise a full Cancelation apllication Request with fifth RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-apllication-request-with-fifth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@RPMUSER5"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "fifth RPM User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "Rise a full Cancelation Request with  fifth RPM User 2111",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "logout  fifth RPM User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fifth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90417630300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:333)\r\n\tat ✽.When fifth RPM User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:91)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:333)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2111",
      "offset": 53
    }
  ],
  "location": "FullCancelationflow.rise_a_full_Cancelation_Request_with_fifth_RPM_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fifth_RPM_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 96,
  "name": "Check the status of the full Cancelation  with Fifth NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation--with-fifth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@NOCuser5"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "fifth NOC User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "check the \"Approved\" status a full Cancelation Request with  fifth NOC User 2111",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "logout  fifth NOC User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fifth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90633427200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:358)\r\n\tat ✽.When fifth NOC User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:98)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:358)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2111",
      "offset": 76
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_full_Cancelation_Request_with_fifth_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fifth_NOC_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 103,
  "name": "Check the status of the full Cancelation apllication for with fifth Legal User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-apllication-for-with-fifth-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@LegalUser5"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "fifth Legal User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Request send to FCC of full Cancelation Request with  fifth Legal User 2111",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "logout fifth Legal User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.fifth_Legal_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90094840600,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_Legal_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:381)\r\n\tat ✽.When fifth Legal User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:105)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.fifth_Legal_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:381)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2111",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.request_send_to_FCC_of_full_Cancelation_Request_with_fifth_Legal_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_fifth_Legal_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 110,
  "name": "Rise a full Cancelation Request with sixth RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-sixth-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@RPMUSER6"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "sixth RPM User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "Rise a full Cancelation Request with  sixth RPM User 2112",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "logout  sixth RPM User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.sixth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90483249500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.sixth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:408)\r\n\tat ✽.When sixth RPM User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:112)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.sixth_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:408)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2112",
      "offset": 53
    }
  ],
  "location": "FullCancelationflow.rise_a_full_Cancelation_Request_with_sixth_RPM_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_sixth_RPM_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 117,
  "name": "Check the status of the full Cancelation process with sixth NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-process-with-sixth-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 116,
      "name": "@NOCuser6"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "sixth NOC User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "check the \"Rejcted\" status a full Cancelation Request with  sixth NOC User 2112",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "logout  sixth NOC User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.sixth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90257723500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.sixth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:432)\r\n\tat ✽.When sixth NOC User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:119)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.sixth_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:432)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejcted",
      "offset": 11
    },
    {
      "val": "2112",
      "offset": 75
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_full_Cancelation_Request_with_sixth_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_sixth_NOC_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 124,
  "name": "Rise a full Cancelation Request with seventh RPM User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;rise-a-full-cancelation-request-with-seventh-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@RPMUSER7"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "seventh RPM User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "Rise a full Cancelation Request with  Seventh RPM User 2113",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "logout  seventh RPM User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.seventh_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90516047000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.seventh_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:456)\r\n\tat ✽.When seventh RPM User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:126)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.seventh_RPM_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:456)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2113",
      "offset": 55
    }
  ],
  "location": "FullCancelationflow.rise_a_full_Cancelation_Request_with_Seventh_RPM_User(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_seventh_RPM_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 131,
  "name": "Check the status of the full Cancelation apllication for with seventh NOC User",
  "description": "",
  "id": "check-the-full-cancelation-flow-for-all-users;check-the-status-of-the-full-cancelation-apllication-for-with-seventh-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 130,
      "name": "@NOCuser7"
    }
  ]
});
formatter.step({
  "line": 133,
  "name": "seventh NOC User login with valid creditinals for full Cancelation process",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "check the \"Approved\" status a full Cancelation Request with  seventh NOC User 2113",
  "keyword": "Then "
});
formatter.step({
  "line": 135,
  "name": "logout  seventh NOC User after rise a full Cancelation process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullCancelationflow.seventh_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process()"
});
formatter.result({
  "duration": 90086056300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.seventh_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:483)\r\n\tat ✽.When seventh NOC User login with valid creditinals for full Cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:133)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.seventh_NOC_User_login_with_valid_creditinals_for_full_Cancelation_process(FullCancelationflow.java:483)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2113",
      "offset": 78
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_full_Cancelation_Request_with_seventh_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullCancelationflow.logout_seventh_NOC_User_after_rise_a_full_Cancelation_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/FullRenewalflow.feature");
formatter.feature({
  "line": 1,
  "name": "check the functionality of Renewel request for all scenarios",
  "description": "",
  "id": "check-the-functionality-of-renewel-request-for-all-scenarios",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a Renewal apllication Request with first RPM User",
  "description": "",
  "id": "check-the-functionality-of-renewel-request-for-all-scenarios;rise-a-renewal-apllication-request-with-first-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@RPMUSER1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "enter url application into \"chrome\" for Renewal flow",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "first RPM User login with valid creditinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Rise a Renewal Request with  first RPM User 2203",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "logout  fifth RPM User after rise a Renewal process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 28
    }
  ],
  "location": "FullRenewalprocess.enter_url_application_into_for_Partial_cancelation_flow(String)"
});
formatter.result({
  "duration": 25656233300,
  "status": "passed"
});
formatter.match({
  "location": "FullRenewalprocess.first_RPM_User_login_with_valid_creditinals_for_Renewal_process()"
});
formatter.result({
  "duration": 8014741800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2203",
      "offset": 44
    }
  ],
  "location": "FullRenewalprocess.rise_a_Renewal_Request_with_first_RPM_User(int)"
});
formatter.result({
  "duration": 85404684000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //div[@class\u003d\u0027slick-cell l0 r0 true\u0027]//label (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Renewalflowpages.createnewrenewalrequestwithRPMuser(Renewalflowpages.java:70)\r\n\tat com.Pathway.Users.RPMUser.renewalrequestwithRPMuser(RPMUser.java:67)\r\n\tat com.Pathway.Stepdefinations.FullRenewalprocess.rise_a_Renewal_Request_with_first_RPM_User(FullRenewalprocess.java:45)\r\n\tat ✽.Then Rise a Renewal Request with  first RPM User 2203(src/test/java/com/Pathway/Base/Featurefiles/FullRenewalflow.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //div[@class\u003d\u0027slick-cell l0 r0 true\u0027]//label\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Renewalflowpages.createnewrenewalrequestwithRPMuser(Renewalflowpages.java:70)\r\n\tat com.Pathway.Users.RPMUser.renewalrequestwithRPMuser(RPMUser.java:67)\r\n\tat com.Pathway.Stepdefinations.FullRenewalprocess.rise_a_Renewal_Request_with_first_RPM_User(FullRenewalprocess.java:45)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FullRenewalprocess.logout_fifth_RPM_User_after_rise_a_Renewal_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Check the status of the  Renewal application  with first NOC User",
  "description": "",
  "id": "check-the-functionality-of-renewel-request-for-all-scenarios;check-the-status-of-the--renewal-application--with-first-noc-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@NOCuser1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "first NOC User login with valid creditinals for renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "check the \"Approved\" status a Renewal Request with  first NOC User 2203",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "logout  first NOC User after rise a Renewal process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullRenewalprocess.first_NOC_User_login_with_valid_creditinals_for_renewal_process()"
});
formatter.result({
  "duration": 20258106000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(.//*[@data-bind\u003d\u0027imgSrc\u0027])[3]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50872}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dbfb885e58666d3f230546bdfaa24b87\n*** Element info: {Using\u003dxpath, value\u003d(.//*[@data-bind\u003d\u0027imgSrc\u0027])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Base.Basepage.elementclickbyjs(Basepage.java:284)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithsecondaccount(Loginpage.java:68)\r\n\tat com.Pathway.Stepdefinations.FullRenewalprocess.first_NOC_User_login_with_valid_creditinals_for_renewal_process(FullRenewalprocess.java:62)\r\n\tat ✽.When first NOC User login with valid creditinals for renewal process(src/test/java/com/Pathway/Base/Featurefiles/FullRenewalflow.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "2203",
      "offset": 67
    }
  ],
  "location": "FullRenewalprocess.check_the_status_a_Renewal_Request_with_first_NOC_User(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FullRenewalprocess.logout_first_NOC_User_after_rise_a_Renewal_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Check the status of the Renewal apllication for with first Legal User",
  "description": "",
  "id": "check-the-functionality-of-renewel-request-for-all-scenarios;check-the-status-of-the-renewal-apllication-for-with-first-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@LegalUser1"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "first Legal User login with valid creditinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Request send to FCC of Renewal Request with  first Legal User 2203",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "logout first Legal User after rise a Renewal process",
  "keyword": "Then "
});
formatter.match({
  "location": "FullRenewalprocess.first_Legal_User_login_with_valid_creditinals_for_Renewal_process()"
});
