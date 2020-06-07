package com.Pathway.Stepdefinations;

import com.Pathway.Base.Basepage;
import com.Pathway.Pathwayconstants.Pathwayconstants;
import com.Pathway.Users.LegalUser;
import com.Pathway.Users.MOuser;
import com.Pathway.Users.MarketUser;
import com.Pathway.Users.NOCUser;
import com.Pathway.Users.RPMUser;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.LogoutPage;
import com.Pathway.Webpages.MDuser;
import com.Pathway.Webpages.RequestViewPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Renewalflow  extends Basepage
{

	MarketUser markertuser = new MarketUser();
	RPMUser rpmuser = new RPMUser();
	MDuser mduser = new MDuser();
	MOuser mouser = new MOuser();
	NOCUser nocuser = new NOCUser();
	LegalUser legaluser = new LegalUser();
	Loginpage login = new Loginpage();
	LogoutPage logout = new LogoutPage();
	RequestViewPage view = new RequestViewPage();
@Given("^Enter Url of application into the \"([^\"]*)\" browsern for Renewal process$")
public void enter_Url_of_application_into_the_browsern_for_Renewal_process(String browsername) throws Throwable {
   init(browsername);
   geturl(Pathwayconstants.URL_OF_THE_APPLICATION);
   System.out.println(">>>Launch application succesfully");
}

@When("^Market user loginwith valid credtinals for Renewal process$")
public void market_user_loginwith_valid_credtinals_for_Renewal_process() throws Throwable {
    markertuser.loginwithMarketUser();
    login.ClickYesbutton();
    System.out.println(">>>Market user login with valid credtinals for Renewa process");
}

@Then("^Rise a Renewal  request with Marketuser (\\d+)$")
public void rise_a_Renewal_request_with_Marketuser(int i) throws Throwable {
   markertuser.renewalrequest(i);
   System.out.println(">>>Rise a renewal  request with Market user ");
   view.renewalchecking(i);
   
}

@Then("^Logout MarketUser after rise a request for  Renewal process$")
public void logout_MarketUser_after_rise_a_request_for_Renewal_process() throws Throwable 
{
	
    logout.logoutUser();
    System.out.println("Logout Market user after rise a renweal request ");
}

@When("^MDU user login with valid credtinals for Renewal process$")
public void mdu_user_login_with_valid_credtinals_for_Renewal_process() throws Throwable {
   login.loginwithsecondaccount();
   mduser.loginwithMDuser();
   System.out.println(">>>Login with MDuser with valid credtinals for renewal process");
}

@Then("^MDU user \"([^\"]*)\" Renewal signal with (\\d+)$")
public void mdu_user_Renewal_signal(String arg1, int i) throws Throwable {
    mduser.renewlrequetwithMDuser();
    System.out.println(">>> check the status of the application");
}

@Then("^Logout MDU user after check the status of Renewal request$")
public void logout_MDU_user_after_check_the_status_of_Renewal_request() throws Throwable {
   logout.logoutUser();
   System.out.println(">>>Logout Market devlopment user after renewal process");
}

@When("^MO user login with valid credtinals for Renewal process$")
public void mo_user_login_with_valid_credtinals_for_Renewal_process() throws Throwable {
   login.loginwithThirdaccount();
   mouser.loginwithMouser();
   System.out.println("Login with MO user with valid credtinals for Reneweal process");
}

@Then("^MO user \"([^\"]*)\" Renewal Signal with (\\d+)$")
public void mo_user_Renewal_Signal(String statusofapplication, int i) throws Throwable {
   
	mouser.renewalrequestwithMOuser(statusofapplication, i);
	System.out.println(">>check the "+statusofapplication+"process for renweal application with MO USER");
}

@Then("^Logout MO user after check the status of Renewal request$")
public void logout_MO_user_after_check_the_status_of_Renewal_request() throws Throwable {
   logout.logoutUser();
   System.out.println(">>>logout MO user");
}

@When("^RPM user login with Valid credtinals for Renewal process$")
public void rpm_user_login_with_Valid_credtinals_for_Renewal_process() throws Throwable {
  login.loginwithFourthaccount();
  rpmuser.loginwithRPMUser();
  System.out.println(">>>Login with RRM user with valid credtinals for renewal process");
}

@Then("^RPM user \"([^\"]*)\" Renewal signal with (\\d+)$")
public void rpm_user_Renewal_signal(String statsuoftheapplication, int i) throws Throwable {
   rpmuser.RenewalrequetwithRPMuser(statsuoftheapplication, i);
   System.out.println(">>> check the"+statsuoftheapplication+" with RPM user");
}

@Then("^Logout RPM user after suucesful check the status of Renewal Process$")
public void logout_RPM_user_after_suucesful_check_the_status_of_Renewal_Process() throws Throwable {
  logout.logoutUser();
  System.out.println(">>>Logout RPM user");
}

@When("^NOC user login with Valid credtinals for Renewal process$")
public void noc_user_login_with_Valid_credtinals_for_Renewal_process() throws Throwable {
    login.loginwithfifthaccount();
    nocuser.loginwithNOCUser();
    System.out.println(">>>Login NOC User with valid credtinals for Renewal process");
}

@Then("^NOC user \"([^\"]*)\" Renewal signal with (\\d+)$")
public void noc_user_Renewal_signal(String statusoftheapplication, int i) throws Throwable {
  nocuser.renewalrequestwithNOCuser(statusoftheapplication, i);
  System.out.println(">>> check the "+statusoftheapplication+"with NOC user");
}

@Then("^Logout NOC user after suucesful check the status of Renewal Process$")
public void logout_NOC_user_after_suucesful_check_the_status_of_Renewal_Process() throws Throwable {
   logout.logoutUser();
   System.out.println(">>>logout NOC user");
}

@When("^LEGAL user login with valid credtinals for Renewal Process$")
public void legal_user_login_with_valid_credtinals_for_Renewal_Process() throws Throwable {
	try {
		login.loginwitsixthaccount();
	} catch (Exception e) {
		// TODO: handle exception
	}
   
   legaluser.loginwithLeaglUser();
   System.out.println("Login Leagl user for Renewal process");
}

@Then("^Request send to FCC with Legal user FOR Renewal PROCESS with (\\d+)$")
public void request_send_to_FCC_with_Legal_user_FOR_Renewal_PROCESS(int i) throws Throwable {
    legaluser.renewalrequestsendtoFCCwithLegalsuer(i);
    System.out.println("Send to fcc renewal request with Legal user");
}


@Then("^Logout LEGAL user after succesful Renewal Request Send to FCC$")
public void logout_LEGAL_user_after_succesful_Renewal_Request_Send_to_FCC() throws Throwable {
   logout.logoutUser();
   System.out.println(">>>Logout Legal customer");
}

}
