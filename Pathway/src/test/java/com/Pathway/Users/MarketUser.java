
package com.Pathway.Users;

import com.Pathway.Webpages.Buildoutflowpages;
import com.Pathway.Webpages.Cancelationflowpages;
import com.Pathway.Webpages.Homepage;
import com.Pathway.Webpages.Loginpage;
import com.Pathway.Webpages.Renewalflowpages;

import Testdata.DataRetrival;

public class MarketUser 
{
	Loginpage login = new Loginpage();
	Homepage homepage = new Homepage();
	Cancelationflowpages cancel = new Cancelationflowpages();
	Renewalflowpages renewalpage = new Renewalflowpages();
	DataRetrival data = new DataRetrival();
	Buildoutflowpages buildout = new Buildoutflowpages();
	
	public void loginwithMarketUser()
	{
		String email = data.getUsername(1);
		String password = data.getPassword(1);
		login.doLogin(email, password);
	}
	
	public void cancelationRequest(int i)
	{
		String Txid = data.getColumn_1(i);
		String Rxid = data.getColumn_2(i);
		homepage.cancelationbutton();
		cancel.riseCancelationRequestWithMUuser(Txid, Rxid);
	}

	public void renewalrequest(int i)
	{
		String txid = data.getColumn_1(i);
		String rxid = data.getColumn_2(i);
		homepage.renewalbutton();
		renewalpage.renewalrequestwithmarketuser(txid, rxid);
	}
	public void buildoutrequest(int i, String date)
	{
		String txid = data.getColumn_1(i);
		String rxid = data.getColumn_2(i);
		homepage.Buildoutbutton();
		buildout.createnewbuildoutrequestwithMarketuser(txid, rxid, date);
	}
}