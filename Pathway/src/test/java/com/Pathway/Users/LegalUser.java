package com.Pathway.Users;

import com.Pathway.Webpages.Buildoutflowpages;
import com.Pathway.Webpages.Cancelationflowpages;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;
import com.Pathway.Webpages.RequestViewPage;

import Testdata.DataRetrival;

public class LegalUser 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Cancelationflowpages cancel = new Cancelationflowpages();
	DataRetrival data = new DataRetrival();
	Renewalflowpages  renewalpage = new Renewalflowpages();
	Buildoutflowpages buildout = new Buildoutflowpages();
	RequestViewPage view = new RequestViewPage();
	
	public void loginwithLeaglUser()
	{
		String email = data.getUsername(5);
		String password = data.getPassword(5);
		
		login.doLogin(email, password);
	}
	
	public void CancelationrequestwithLeagluser( int i)
	{
		homepage.cancelationbutton();
		view.requestview(i);
		
		cancel.sendtoFCCwithLegaluser();
	}
	
	public void renewalrequestsendtoFCCwithLegalsuer(int i)
	{
		homepage.renewalbutton();
		view.requestview(i);
		renewalpage.sendtoFCCforrenewalconnection();
	}
	public void sendtoFCCbuildrequestwithLegalsuer(int i)
	{
		homepage.Buildoutbutton();
		view.requestview(i);
		buildout.sendtoFCCbuildoutrequest();
		
	}

}
