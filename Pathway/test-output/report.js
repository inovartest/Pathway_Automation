$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature");
formatter.feature({
  "line": 1,
  "name": "check the  functionality of renewal a sigal with Pathway tool",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a Renewal request with Market user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;rise-a-renewal-request-with-market-user",
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
  "name": "Enter Url of application into the \"chrome\" browsern for Renewal process",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Market user loginwith valid credtinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rise a Renewal  request with Marketuser 195",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Logout MarketUser after rise a request for  Renewal process",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 35
    }
  ],
  "location": "Renewalflow.enter_Url_of_application_into_the_browsern_for_Renewal_process(String)"
});
formatter.result({
  "duration": 27766989600,
  "status": "passed"
});
formatter.match({
  "location": "Renewalflow.market_user_loginwith_valid_credtinals_for_Renewal_process()"
});
formatter.result({
  "duration": 18087440700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "195",
      "offset": 40
    }
  ],
  "location": "Renewalflow.rise_a_Renewal_request_with_Marketuser(int)"
});
formatter.result({
  "duration": 19926296400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003clabel for\u003d\"selector8812182\"\u003e\u003c/label\u003e is not clickable at point (202, 449). Other element would receive the click: \u003cdiv class\u003d\"grid-canvas grid-canvas-top grid-canvas-left\" tabindex\u003d\"0\" hidefocus\u003d\"\" style\u003d\"height: 73px; width: 1279px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.61)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10ed0a63ba257c51292be7197a360d09\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:65)\r\n\tat com.Pathway.Webpages.Renewalflowpages.renewalrequestwithmarketuser(Renewalflowpages.java:43)\r\n\tat com.Pathway.Users.MarketUser.renewalrequest(MarketUser.java:41)\r\n\tat com.Pathway.Stepdefinations.Renewalflow.rise_a_Renewal_request_with_Marketuser(Renewalflow.java:43)\r\n\tat ✽.Then Rise a Renewal  request with Marketuser 195(E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Renewalflow.logout_MarketUser_after_rise_a_request_for_Renewal_process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Check the status of Renewal Request with MDU user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;check-the-status-of-renewal-request-with-mdu-user",
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
  "name": "MDU user login with valid credtinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "MDU user \"Approved\" Renewal signal",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Logout MDU user after check the status of Renewal request",
  "keyword": "Then "
});
formatter.match({
  "location": "Renewalflow.mdu_user_login_with_valid_credtinals_for_Renewal_process()"
});
formatter.result({
  "duration": 16611939200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(.//*[@data-bind\u003d\u0027imgSrc\u0027])[3]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10ed0a63ba257c51292be7197a360d09\n*** Element info: {Using\u003dxpath, value\u003d(.//*[@data-bind\u003d\u0027imgSrc\u0027])[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:64)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithsecondaccount(Loginpage.java:96)\r\n\tat com.Pathway.Stepdefinations.Renewalflow.mdu_user_login_with_valid_credtinals_for_Renewal_process(Renewalflow.java:53)\r\n\tat ✽.When MDU user login with valid credtinals for Renewal process(E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 10
    }
  ],
  "location": "Renewalflow.mdu_user_Renewal_signal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Renewalflow.logout_MDU_user_after_check_the_status_of_Renewal_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Check the staus of the Renewal Request with MO user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;check-the-staus-of-the-renewal-request-with-mo-user",
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
  "name": "MO user login with valid credtinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "MO user \"Approved\" Renewal Signal",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Logout MO user after check the status of Renewal request",
  "keyword": "Then "
});
formatter.match({
  "location": "Renewalflow.mo_user_login_with_valid_credtinals_for_Renewal_process()"
});
formatter.result({
  "duration": 16988489200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(.//*[@data-bind\u003d\u0027imgSrc\u0027])[5]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10ed0a63ba257c51292be7197a360d09\n*** Element info: {Using\u003dxpath, value\u003d(.//*[@data-bind\u003d\u0027imgSrc\u0027])[5]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:64)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithThirdaccount(Loginpage.java:101)\r\n\tat com.Pathway.Stepdefinations.Renewalflow.mo_user_login_with_valid_credtinals_for_Renewal_process(Renewalflow.java:69)\r\n\tat ✽.When MO user login with valid credtinals for Renewal process(E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 9
    }
  ],
  "location": "Renewalflow.mo_user_Renewal_Signal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Renewalflow.logout_MO_user_after_check_the_status_of_Renewal_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Check the status of the Renewal Request with RPM user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;check-the-status-of-the-renewal-request-with-rpm-user",
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
  "name": "RPM user login with Valid credtinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "RPM user \"Approved\" Renewal signal",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Logout RPM user after suucesful check the status of Renewal Process",
  "keyword": "Then "
});
formatter.match({
  "location": "Renewalflow.rpm_user_login_with_Valid_credtinals_for_Renewal_process()"
});
formatter.result({
  "duration": 13241965700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(.//*[@data-bind\u003d\u0027imgSrc\u0027])[7]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10ed0a63ba257c51292be7197a360d09\n*** Element info: {Using\u003dxpath, value\u003d(.//*[@data-bind\u003d\u0027imgSrc\u0027])[7]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:64)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithFourthaccount(Loginpage.java:106)\r\n\tat com.Pathway.Stepdefinations.Renewalflow.rpm_user_login_with_Valid_credtinals_for_Renewal_process(Renewalflow.java:86)\r\n\tat ✽.When RPM user login with Valid credtinals for Renewal process(E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 10
    }
  ],
  "location": "Renewalflow.rpm_user_Renewal_signal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Renewalflow.logout_RPM_user_after_suucesful_check_the_status_of_Renewal_Process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Check the status of the Renewal Request with NOC user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;check-the-status-of-the-renewal-request-with-noc-user",
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
  "line": 36,
  "name": "NOC user login with Valid credtinals for Renewal process",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "NOC user \"Approved\" Renewal signal",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Logout NOC user after suucesful check the status of Renewal Process",
  "keyword": "Then "
});
formatter.match({
  "location": "Renewalflow.noc_user_login_with_Valid_credtinals_for_Renewal_process()"
});
formatter.result({
  "duration": 13263141300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 10ed0a63ba257c51292be7197a360d09\n*** Element info: {Using\u003dxpath, value\u003d(.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:64)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:112)\r\n\tat com.Pathway.Stepdefinations.Renewalflow.noc_user_login_with_Valid_credtinals_for_Renewal_process(Renewalflow.java:102)\r\n\tat ✽.When NOC user login with Valid credtinals for Renewal process(E:/repositeryforgit/Pathway_Automation/Pathway/src/test/java/com/Pathway/Base/Featurefiles/Renewalflow.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 10
    }
  ],
  "location": "Renewalflow.noc_user_Renewal_signal(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Renewalflow.logout_NOC_user_after_suucesful_check_the_status_of_Renewal_Process()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Check the status of the Renewal Request Legal user",
  "description": "",
  "id": "check-the--functionality-of-renewal-a-sigal-with-pathway-tool;check-the-status-of-the-renewal-request-legal-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "LEGAL user login with valid credtinals for Renewal Process",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Request send to FCC with Legal user FOR Renewal PROCESS",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Logout LEGAL user after succesful Renewal Request Send to FCC",
  "keyword": "Then "
});
formatter.match({
  "location": "Renewalflow.legal_user_login_with_valid_credtinals_for_Renewal_Process()"
});
