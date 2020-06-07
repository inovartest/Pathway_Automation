package com.Pathway.Users;

import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;
import com.Pathway.Webpages.RequestViewPage;

import Testdata.DataRetrival;

public class MOuser 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	DataRetrival data = new DataRetrival();
	Renewalflowpages renewalpage = new Renewalflowpages();
	RequestViewPage view = new RequestViewPage();
	
	public void loginwithMouser()
	{
		String email =data.getUsername(7);
		String password = data.getPassword(7);
		login.doLogin(email, password);
	}
	
	public void renewalrequestwithMOuser(String statusofapplication, int i)
	{
		
		homepage.renewalbutton();
		view.requestview(i);
		if (statusofapplication.equals("Approved"))
		{
			renewalpage.renewlapprovewithMOuser();
		}
		else {
			renewalpage.rejectrenewalwithMOuser();
		}
	}

}
