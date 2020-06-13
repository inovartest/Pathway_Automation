package com.Pathway.Users;

import com.Pathway.Base.Basepage;
import com.Pathway.Webpages.Buildoutflowpages;
import com.Pathway.Webpages.Cancelationflowpages;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;
import com.Pathway.Webpages.RequestViewPage;

import Testdata.DataRetrival;

public class RPMUser extends Basepage
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
	
	public void RenewalrequetwithRPMuser(String statsuoftheapplication, int i)
	{
		homepage.renewalbutton();
	
		view.requestview(i);
		if (statsuoftheapplication.equals("Approved"))
		{
			renewalpage.renewlapprovewithRPMuser();
		}
		else {
			renewalpage.rejectrenewalwithRPMuser();
		}
	}
	
	public void buildoutrequestwithRPMuser(String statusoftheapplication, int i)
	{
		refreshthepage();
		homepage.Buildoutbutton();
		sleep();
		view.requestviewforpm(i);
		if (statusoftheapplication.equals("Approved"))
		{
			buildout.buildoutrequestapprovewithRPMuser();
		}
		else {
			buildout.buildoutrequestrejectwithRPMuser();
		}
	}
	public void createbuildoutrequestwithrpm(int i, String date)
	{
		String txid = data.getColumn_1(i);
		String rxid = data.getColumn_2(i);
		homepage.Buildoutbutton();
		buildout.createnewbuildoutrequestwithRPMuser(txid, rxid, date);
	}

}
