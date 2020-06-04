package com.Pathway.Webpages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Pathway.Base.Basepage;
import com.Pathway.Stepdefinations.Cancleationflow;

public class Loginpage extends Basepage
{


	private By Emailfieldbox = By.id("i0116");
	private By Nextbuttonforsignin = By.id("idSIButton9");
	private By Passwordfiledbox = By.id("i0118");
	private By signinbutton = By.id("idSIButton9");
	private By Yesbutton = By.id("idSIButton9");
	private By loginsecondaccount = By.xpath("(.//*[@data-bind='imgSrc'])[3]");
	private By loginwiththirdaccount = By.xpath("(.//*[@data-bind='imgSrc'])[5]");
	private By loginwithfourthaccount = By.xpath("(.//*[@data-bind='imgSrc'])[7]");
	private By loginwithfifthaccount = By.xpath("(.//*[@data-bind='imgSrc'])[9]");
	private By loginwithsixthaccount = By.xpath("(.//*[@data-bind='imgSrc'])[11]");
	
	public void doLogin( String email, String password)
	{
		try {
			enterText(Emailfieldbox, email);
			sleep();
			click(Nextbuttonforsignin);
			sleep();
			/*WebElement element = driver.findElement(Passwordfiledbox);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.presenceOfElementLocated(Passwordfiledbox));*/
			/*refreshthepage();
			refreshthepage();*/
			enterText(Passwordfiledbox, password);
			sleep();
			//element.sendKeys(password);
		} catch (StaleElementReferenceException e) {
			enterText(Passwordfiledbox, password);
			sleep();
		}
	/*	WebElement element1 = driver.findElement(signinbutton);
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.presenceOfElementLocated(Passwordfiledbox));
		element1.click();*/
		
		
		explicitWaitClickable(signinbutton);
		//sleep();
	}
	public void ClickYesbutton()
	{
		/*try {
			refreshthepage();
			refreshthepage();
			elemntclickbyjs(Yesbutton);	
			sleep();
		} catch (StaleElementReferenceException e) {
			elemntclickbyjs(Yesbutton);	
			sleep();
		}*/
		
	/*	for (int i = 0; i <= 4; i++) 
		{
			try {
				elemntclickbyjs(Yesbutton);
				sleep();
				break;
			} catch (StaleElementReferenceException e) {
				elemntclickbyjs(Yesbutton);
				sleep();
				System.out.println(e.getMessage());
			}
			
		}*/
		/* WebDriverWait wait = new WebDriverWait(driver, 20);
		    WebElement el = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@type='submit']")));
		    el.click();*/
/*	WebElement yesbutton = driver.findElement(By.xpath("//input[@type='submit']"));
	yesbutton.sendKeys(Keys.ENTER);
	sleep();*/
		//enterbuttonclick(Yesbutton);
		//enter();
		/*explicitWaitClickable(Yesbutton);
		sleep();*/
		
		sleep();
		Actions actions = new Actions(driver);
	    WebElement yes = driver.findElement(By.xpath("//input[@type='submit']"));
	    yes.isDisplayed();
	    yes.isEnabled();
	    
	    actions.moveToElement(yes).click().perform();
	   
	}
	
	public void loginwithsecondaccount()
	{
		click(loginsecondaccount);
		sleep();
	}
	public void loginwithThirdaccount()
	{
		click(loginwiththirdaccount);
		sleep();
	}
	public void loginwithFourthaccount()
	{
		click(loginwithfourthaccount);
		sleep();
	}
	
	public void loginwithfifthaccount()
	{
		click(loginwithfifthaccount);
		sleep();
	}
	public void loginwitsixthaccount()
	{
		click(loginwithsixthaccount);
		sleep();
	}
}
