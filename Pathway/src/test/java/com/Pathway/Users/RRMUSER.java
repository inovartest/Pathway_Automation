package com.Pathway.Users;

import com.Pathway.Webpages.Cancelationflowpages;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.RequestViewPage;

import com.Pathway.Testdata.*;

public class RRMUSER 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Cancelationflowpages cancel = new Cancelationflowpages();
	DataRetrival data = new DataRetrival();
	RequestViewPage view = new RequestViewPage();
	
	public void loginwithRRMUser()
	{
		String email = data.getUsername(3);
		String password = data.getPassword(3);
		login.doLogin(email, password);
	}
	
	public void CancelationrequestwithRRMuser(String statusoftheapplication,int i)
	{
		homepage.cancelationbutton();
		try {
			view.requestview(i);
		} catch (Exception e) {
			
		}

	
		if (statusoftheapplication.equals("Approved"))
		{
			cancel.approvecancelationwithRRMuser();
		}
		else {
			cancel.rejectcancelationwithRRMuser();
		}
	}

}
