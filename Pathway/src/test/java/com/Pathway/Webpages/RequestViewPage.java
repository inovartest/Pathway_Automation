package com.Pathway.Webpages;

import org.openqa.selenium.By;

import com.Pathway.Base.Basepage;

public class RequestViewPage extends Basepage
{

	private By Checkboxforlist = By.xpath("//div[@class='slick-cell l0 r0 selected true active']");
	private By viewoption = By.xpath("(.//*[@class='btn-grid approve'])[1]");
	private By exportbutton = By.xpath("//button[@class='btn-grid']");
}
