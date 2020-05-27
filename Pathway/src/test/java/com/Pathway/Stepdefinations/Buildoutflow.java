package com.Pathway.Stepdefinations;

import org.apache.log4j.Logger;

import com.Pathway.Base.Basepage;
import com.Pathway.Pathwayconstants.Pathwayconstants;
import com.Pathway.Users.LegalUser;
import com.Pathway.Users.MarketUser;
import com.Pathway.Users.NOCUser;
import com.Pathway.Users.RPMUser;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.LogoutPage;
import com.Pathway.Webpages.RequestViewPage;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Buildoutflow  extends Basepage{

	MarketUser markertuser = new MarketUser();
	Homepage home = new Homepage();
	RPMUser rpmuser = new RPMUser();
	NOCUser nocuser = new NOCUser();
	LegalUser legaluser = new LegalUser();
	Loginpage login = new Loginpage();
	LogoutPage logout = new LogoutPage();
	RequestViewPage view = new RequestViewPage();
	//String stepname = "buildoutflow";
	String descrption ="Test the buildoutflowof pathwaytool";
	public Logger loggger = Logger.getLogger("Devipnoylogger");
@Given("^Enter Url of application into the \"([^\"]*)\" browser for BUildOutrequest$")
public void enter_Url_of_application_into_the_browser_for_BUildOutrequest(String browsername) throws Throwable 
{
	extentreporinit( descrption);
    init(browsername);
    loggger.debug("Browser intiation succesfully");
    geturl(Pathwayconstants.URL_OF_THE_APPLICATION);
}

@When("^Market user loginwith valid credtinals for BUildOutrequest process$")
public void market_user_loginwith_valid_credtinals_for_BUildOutrequest_process() throws Throwable 
{
    markertuser.loginwithMarketUser();
   login.ClickYesbutton();
  // home.checkloginfunctionlaity();
   //validatingpage(home.accountlbl, "Login function");
extentpassreport(Pathwayconstants.Loginsuccess+"Marketuser");

   
}

@Then("^Rise a BUildOut request with Marketuser (\\d+) with date \"([^\"]*)\"$")
public void rise_a_BUildOut_request_with_Marketuser(int i , String date) throws Throwable {
   markertuser.buildoutrequest(i, date);
   
}

@Then("^Logout MarketUser after rise a request for  BUildOut$")
public void logout_MarketUser_after_rise_a_request_for_BUildOut() throws Throwable 
{
	test.log(LogStatus.PASS, "succesfully rise build out request");
   logout.logoutUser();
   extentreportssave();
   
}

@When("^RPM user login with valid credtinals for BUildOut process$")
public void rpm_user_login_with_valid_credtinals_for_BUildOut_process() throws Throwable 
{
    login.loginwithsecondaccount();
    rpmuser.loginwithRPMUser();
}

@Then("^RPM user \"([^\"]*)\" BUildOut request signal$")
public void rpm_user_BUildOut_request_signal(String statusoftheapplication) throws Throwable {
    rpmuser.buildoutrequestwithRPMuser(statusoftheapplication);
}

@Then("^Logout RPM user after check the status of BUildOut request$")
public void logout_RPM_user_after_check_the_status_of_BUildOut_request() throws Throwable {
  logout.logoutUser();
}

@When("^NOC user login with valid credtinals for BUildOutrequest process$")
public void noc_user_login_with_valid_credtinals_for_BUildOutrequest_process() throws Throwable {
   login.loginwithThirdaccount();
   nocuser.loginwithNOCUser();
}

@Then("^NOC user \"([^\"]*)\" BUildOutrequest Signal$")
public void noc_user_BUildOutrequest_Signal(String statusoftheapplication) throws Throwable {
    nocuser.buildourequestwithNOCuser(statusoftheapplication);
}

@Then("^Logout NOC user after check the status of BUildOutrequest$")
public void logout_NOC_user_after_check_the_status_of_BUildOutrequest() throws Throwable {
    logout.logoutUser();
}

@When("^LEGAL user login with valid credtinals for BUildOutrequest$")
public void legal_user_login_with_valid_credtinals_for_BUildOutrequest() throws Throwable {
login.loginwithFourthaccount();
legaluser.loginwithLeaglUser();
}

@Then("^Request send to FCC with Legal user FOR BUildOutrequest$")
public void request_send_to_FCC_with_Legal_user_FOR_BUildOutrequest() throws Throwable {
   legaluser.sendtoFCCbuildrequestwithLegalsuer();
}

@Then("^Logout LEGAL user after succesful BUildOutrequest Send to FCC$")
public void logout_LEGAL_user_after_succesful_BUildOutrequest_Send_to_FCC() throws Throwable {
    logout.logoutUser();
   
}
}
