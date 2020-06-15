package com.Pathway.Webpages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.Pathway.Base.Basepage;

public class Homepage extends Basepage
{
	 private By cancelationbutton = By.xpath("//div[contains(text(),'Cancellations')]");
	 private By Renewalbutton = By.xpath("(.//*[@class='menu-items'])[3]");
	 private By Buildooutbuuton = By.xpath("//div[contains(text(),'Buildout')]");
	public By accountlbl = By.className("dashboard-list-cards-header");
		private By dashboardbutton = By.xpath("(.//*[@class='menu-items'])[1]");	
	 public void cancelationbutton()
	 {
		explicitWaitClickable(cancelationbutton);
		 sleep();
	 }
	 public void dashboardbutton()
	 {
explicitWaitClickable(dashboardbutton);
sleep();
	 }public void renewalbutton()
	 {
		 explicitWaitClickable(Renewalbutton);
		 sleep();
	 }
	 public void Buildoutbutton()
	 {
		explicitWaitClickable(Buildooutbuuton);
		sleep();
		 
	 }
	 
	 public void checkloginfunctionlaity()
	 {
		 String stepname ="Login functionality";
		 validatingpage(accountlbl, stepname);
	 }
}
