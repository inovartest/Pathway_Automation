$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/Buidoutflow.feature");
formatter.feature({
  "line": 1,
  "name": "Check the buildoutflow functionality with Pathway tool",
  "description": "",
  "id": "check-the-buildoutflow-functionality-with-pathway-tool",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rise a Buildout request with Market user",
  "description": "",
  "id": "check-the-buildoutflow-functionality-with-pathway-tool;rise-a-buildout-request-with-market-user",
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
  "name": "Enter Url of application into the \"chrome\" browser for BUildOutrequest",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Market user loginwith valid credtinals for BUildOutrequest process",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Rise a BUildOut request with Marketuser 555 with date \"06-08-2020\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Logout MarketUser after rise a request for  BUildOut",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 35
    }
  ],
  "location": "Buildoutflow.enter_Url_of_application_into_the_browser_for_BUildOutrequest(String)"
});
formatter.result({
  "duration": 33184120000,
  "status": "passed"
});
formatter.match({
  "location": "Buildoutflow.market_user_loginwith_valid_credtinals_for_BUildOutrequest_process()"
});
formatter.result({
  "duration": 13961896500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "555",
      "offset": 40
    },
    {
      "val": "06-08-2020",
      "offset": 55
    }
  ],
  "location": "Buildoutflow.rise_a_BUildOut_request_with_Marketuser(int,String)"
});
formatter.result({
  "duration": 19134054300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"slick-cell l0 r0 true\"\u003e...\u003c/div\u003e is not clickable at point (211, 447). Other element would receive the click: \u003cdiv class\u003d\"grid-canvas grid-canvas-top grid-canvas-left\" tabindex\u003d\"0\" hidefocus\u003d\"\" style\u003d\"height: 73px; width: 1279px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.61)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49892}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8f7de76d460bfee08897c29b79bc7e17\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:129)\r\n\tat com.Pathway.Webpages.Buildoutflowpages.createnewbuildoutrequestwithMarketuser(Buildoutflowpages.java:39)\r\n\tat com.Pathway.Users.MarketUser.buildoutrequest(MarketUser.java:48)\r\n\tat com.Pathway.Stepdefinations.Buildoutflow.rise_a_BUildOut_request_with_Marketuser(Buildoutflow.java:58)\r\n\tat ✽.Then Rise a BUildOut request with Marketuser 555 with date \"06-08-2020\"(src/test/java/com/Pathway/Base/Featurefiles/Buidoutflow.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Buildoutflow.logout_MarketUser_after_rise_a_request_for_BUildOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Check the status of BUildOut Request with RPM user",
  "description": "",
  "id": "check-the-buildoutflow-functionality-with-pathway-tool;check-the-status-of-buildout-request-with-rpm-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "RPM user login with valid credtinals for BUildOut process",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "RPM user \"Approved\" BUildOut request signal with 557",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Logout RPM user after check the status of BUildOut request",
  "keyword": "Then "
});
formatter.match({
  "location": "Buildoutflow.rpm_user_login_with_valid_credtinals_for_BUildOut_process()"
});
