package com.Pathway.Users;

import com.Pathway.Webpages.Buildoutflowpages;
import com.Pathway.Webpages.Cancelationflowpages;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;
import com.Pathway.Webpages.RequestViewPage;

import Testdata.DataRetrival;

public class RPMUser 
{

	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Cancelationflowpages cancel = new Cancelationflowpages();
	DataRetrival data = new DataRetrival();
	Renewalflowpages renewalpage = new Renewalflowpages();
	Buildoutflowpages buildout = new Buildoutflowpages();
	RequestViewPage view = new RequestViewPage();
	public void loginwithRPMUser()
	{
		String email = data.getUsername(2);
		String password = data.getPassword(2);
		
		login.doLogin(data.getUsername(2), data.getPassword(2));
	}
	
	public void CancelationrequestwithRPMuser(String statusoftheapplication, int i)
	{
		homepage.cancelationbutton();
		view.requestview(i);
		if (statusoftheapplication.equals("Approved"))
		{
			cancel.approvecancelationwithRPMuser();
		}
		else {
			cancel.rejectcancelationwithRPMuser();
		}
	}
	
	public void RenewalrequetwithRPMuser(String statsuoftheapplication)
	{
		homepage.renewalbutton();
		if (statsuoftheapplication.equals("Approved"))
		{
			renewalpage.renewlapprovewithRPMuser();
		}
		else {
			renewalpage.rejectrenewalwithRPMuser();
		}
	}
	
	public void buildoutrequestwithRPMuser(String statusoftheapplication)
	{
		homepage.Buildoutbutton();
		if (statusoftheapplication.equals("Approved"))
		{
			buildout.buildoutrequestapprovewithRPMuser();
		}
		else {
			buildout.buildoutrequestrejectwithRPMuser();
		}
	}

}
