package com.Pathway.Users;

import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;
import com.Pathway.Webpages.RequestViewPage;

import Testdata.DataRetrival;

public class MDuser 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Renewalflowpages renewalpage = new Renewalflowpages();
	DataRetrival data = new DataRetrival();
	RequestViewPage view = new RequestViewPage();
	
	public void loginwithMDuser()
	{
		String email =data.getUsername(6);
		String password = data.getPassword(6);
		login.doLogin(email, password);
	}

	public void renewlrequetwithMDuser(int i)
	{
		homepage.renewalbutton();
		view.requestview(i);
		renewalpage.renewlapprovewithMDuser();
		
	}
}
