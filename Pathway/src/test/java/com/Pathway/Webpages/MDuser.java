package com.Pathway.Webpages;

import Testdata.DataRetrival;

public class MDuser 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Renewalflowpages renewalpage = new Renewalflowpages();
	DataRetrival data = new DataRetrival();
	
	public void loginwithMDuser()
	{
		String email =data.getUsername(6);
		String password = data.getPassword(6);
		login.doLogin(email, password);
	}

	public void renewlrequetwithMDuser()
	{
		homepage.renewalbutton();
		renewalpage.renewlapprovewithMDuser();
		
	}
}
