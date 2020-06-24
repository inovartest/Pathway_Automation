package com.Pathway.Base;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Pathway.Users.RRMUSER;

public class Demo extends Basepage
{
	private void method() throws AWTException, InterruptedException
	{
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_CONTROL);
		sleep();
		r.keyPress(KeyEvent.VK_CONTROL);
		sleep();
		r.keyPress(KeyEvent.VK_J); 
		sleep();
		r.keyRelease(KeyEvent.VK_CONTROL);
		sleep();
     	r.keyPress(KeyEvent.VK_A);
     	r.keyPress(KeyEvent.VK_L);
     	r.keyPress(KeyEvent.VK_E);
     	Thread.sleep(2000);
     	r.keyPress(KeyEvent.VK_E);
     	r.keyPress(KeyEvent.VK_L);
     	r.keyPress(KeyEvent.VK_DECIMAL);
     	r.keyPress(KeyEvent.VK_K);
     	r.keyPress(KeyEvent.VK_H);
     	r.keyPress(KeyEvent.VK_A);
     	r.keyPress(KeyEvent.VK_N);
     	r.keyPress(KeyEvent.VK_SHIFT);
     	r.keyPress(KeyEvent.VK_2);
     	Thread.sleep(2000);
     	r.keyRelease(KeyEvent.VK_SHIFT);
     	r.keyPress(KeyEvent.VK_CONTROL);
		sleep();
		r.keyPress(KeyEvent.VK_CONTROL);
		sleep();
		r.keyPress(KeyEvent.VK_T);
		r.keyPress(KeyEvent.VK_MINUS);
		r.keyPress(KeyEvent.VK_M);
		r.keyPress(KeyEvent.VK_O);
		r.keyPress(KeyEvent.VK_B);
		r.keyPress(KeyEvent.VK_I);
		r.keyPress(KeyEvent.VK_L);
		r.keyPress(KeyEvent.VK_DECIMAL);
		r.keyPress(KeyEvent.VK_C);
		r.keyPress(KeyEvent.VK_O);
		r.keyPress(KeyEvent.VK_M);
		r.keyPress(KeyEvent.VK_TAB);
		r.keyPress(KeyEvent.VK_CAPS_LOCK);
		sleep();
		r.keyPress(KeyEvent.VK_D);
		r.keyRelease(KeyEvent.VK_CAPS_LOCK);
		sleep();
		r.keyPress(KeyEvent.VK_E);
		r.keyPress(KeyEvent.VK_V);
		r.keyPress(KeyEvent.VK_SHIFT);
     	r.keyPress(KeyEvent.VK_2);
     	Thread.sleep(2000);
     	r.keyRelease(KeyEvent.VK_SHIFT);
     	sleep();
     	r.keyPress(KeyEvent.VK_2);
     	r.keyPress(KeyEvent.VK_0);
     	r.keyPress(KeyEvent.VK_2);
     	sleep();
     	r.keyPress(KeyEvent.VK_0);
     	sleep();
     	r.keyPress(KeyEvent.VK_TAB);
     	r.keyPress(KeyEvent.VK_ENTER);

		
		
	}
	RRMUSER rrm = new RRMUSER();
	@Test
	public void run() throws AWTException, InterruptedException
	{
		/*WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://microwaveapp.azurewebsites.net/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//rrm.loginwithRRMUser();
		driver.findElement(By.name("loginfmt")).sendKeys("demorrm@TMobMicrowave.onmicrosoft.com");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("idSIButton9")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("i0118")).sendKeys("Dev@2020");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("idSIButton9")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.id("idSIButton9")).click();*/
		method();
		
		
	}

}
