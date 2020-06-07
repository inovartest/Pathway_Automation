package com.Pathway.Base;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Pathway.Users.RRMUSER;

public class Demo 
{
	RRMUSER rrm = new RRMUSER();
	@Test
	public void run()
	{
		WebDriver driver = new ChromeDriver();
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
		driver.findElement(By.id("idSIButton9")).click();
		
	}

}
