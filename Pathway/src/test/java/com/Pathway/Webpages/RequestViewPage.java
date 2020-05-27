package com.Pathway.Webpages;

import org.openqa.selenium.By;

import com.Pathway.Base.Basepage;

public class RequestViewPage extends Basepage
{

//	private By Checkboxforlist = By.xpath("//div[@class='slick-cell l0 r0 selected true active']");
	private By viewoption = By.xpath("(.//*[@class='btn-grid approve'])[1]");
	private By exportbutton = By.xpath("//button[@class='btn-grid']");
	private By Approvedlist = By.xpath("//a[@id='nav-approved-tab']");
	private By Rejectedlist = By.xpath("//a[@id='nav-rejected-tab']");
	private By Inprogresslist = By.xpath("//a[@id='nav-submitted-tab']");
	private By checkboxforlist = By.xpath("(.//*[@class='slick-cell l0 r0 true'])[19]");
	private By clickViewbutton =By.xpath(".//*[@name='viewDetailsButtonForCancellationApproved:19']");
	
	public void checkapprovedlist()
	{
click(Approvedlist);
sleep();
explicitWaitClickable(checkboxforlist);
sleep();
mouseoverelement(clickViewbutton);
implicitWait(5);
click(clickViewbutton);
sleep();
	}

public void checkrejetedlist()
{
	click(Rejectedlist);
	sleep();
	explicitWaitClickable(checkboxforlist);
	sleep();
	mouseoverelement(clickViewbutton);
	implicitWait(5);
	explicitWaitClickable(clickViewbutton);
	sleep();
}

}