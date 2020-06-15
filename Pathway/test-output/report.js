$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature");
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
  "name": "Rise a full Cancelation Request with first Market User 1609",
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
  "duration": 31470312800,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.first_Market_User_login_with_valid_creditinals_for_full_cancelation_process()"
});
formatter.result({
  "duration": 10620986400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1609",
      "offset": 55
    }
  ],
  "location": "FullCancelationflow.rise_a_full_Cancelation_Request_with_first_Market_User(int)"
});
formatter.result({
  "duration": 48967556500,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_first_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 9772948800,
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
  "name": "check the \"Approved\" status a Cancelation Request with first RPM User 1609",
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
  "duration": 35635003100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "1609",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_first_RPM_User(String,int)"
});
formatter.result({
  "duration": 11362478600,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_RPM_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 6902083500,
  "status": "passed"
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
  "name": "check the \"Approved\" status a Cancelation Request with first NOC User 1609",
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
  "duration": 32844964000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "1609",
      "offset": 70
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_first_NOC_User(String,int)"
});
formatter.result({
  "duration": 17769603100,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_NOC_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 6765977700,
  "status": "passed"
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
  "name": "Request send to FCC of full cancelation process with  First Legal User 1609",
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
  "duration": 33439548800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1609",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.request_send_to_FCC_of_full_cancelation_process_with_First_Legal_User(int)"
});
formatter.result({
  "duration": 17723589200,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_First_Legal_User_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 6779905000,
  "status": "passed"
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
  "name": "Rise a Cancelation Request with second Market User 1610",
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
  "duration": 34611818200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1610",
      "offset": 51
    }
  ],
  "location": "FullCancelationflow.rise_a_Cancelation_Request_with_second_Market_User(int)"
});
formatter.result({
  "duration": 46917765700,
  "status": "passed"
});
formatter.match({
  "location": "FullCancelationflow.logout_second_MarketUser_after_rise_a_full_cancelation_process()"
});
formatter.result({
  "duration": 9866829400,
  "status": "passed"
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
  "name": "check the \"Rejected\" status a Cancelation Request with second RPM User 1610",
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
  "duration": 32884087000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 11
    },
    {
      "val": "1610",
      "offset": 71
    }
  ],
  "location": "FullCancelationflow.check_the_status_a_Cancelation_Request_with_second_RPM_User(String,int)"
});
formatter.result({
  "duration": 8567419900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.97)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\saiku\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54665}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6ac1ca36c7813c27a83f6ac0eb4ee73d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.Pathway.Base.Basepage.click(Basepage.java:85)\r\n\tat com.Pathway.Webpages.Cancelationflowpages.rejectcancelationwithRPMuser(Cancelationflowpages.java:158)\r\n\tat com.Pathway.Users.RPMUser.CancelationrequestwithRPMuser(RPMUser.java:38)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.check_the_status_a_Cancelation_Request_with_second_RPM_User(FullCancelationflow.java:171)\r\n\tat ✽.Then check the \"Rejected\" status a Cancelation Request with second RPM User 1610(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:43)\r\n",
  "status": "failed"
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
  "name": "Rise a Cancelation Request with Third Market User 1602",
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
  "duration": 90555295000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:185)\r\n\tat ✽.When Third Market User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:49)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_Market_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:185)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1602",
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
  "name": "check the \"Approved\" status a Cancelation Request with Third RPM User 1602",
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
  "duration": 90084766400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:212)\r\n\tat ✽.When Third RPM User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:56)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_RPM_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:212)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Approved",
      "offset": 11
    },
    {
      "val": "1602",
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
  "name": "check the \"Rejected\" status a Cancelation Request with Third NOC User 1602",
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
  "duration": 89563067700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9] (tried for 70 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:235)\r\n\tat ✽.When Third NOC User login with valid creditinals for full cancelation process(src/test/java/com/Pathway/Base/Featurefiles/FullCancelationFlow.feature:63)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: (.//*[@data-bind\u003d\u0027imgSrc\u0027])[9]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-4MG5Q5BI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\r\n\tat com.Pathway.Base.Basepage.explicitWaitClickable(Basepage.java:151)\r\n\tat com.Pathway.Webpages.Loginpage.loginwithfifthaccount(Loginpage.java:84)\r\n\tat com.Pathway.Stepdefinations.FullCancelationflow.third_NOC_User_login_with_valid_creditinals_for_full_cancelation_process(FullCancelationflow.java:235)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rejected",
      "offset": 11
    },
    {
      "val": "1602",
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
  "name": "Rise a Cancelation Request with fourth Market User 1603",
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
});