package com.Pathway.TestRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.aventstack.extentreports.reporter.configuration.ChartLocation;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
features={"src\\test\\java\\com\\Pathway\\Base\\Featurefiles\\Buidoutflow.feature"},glue= "com.Pathway.Stepdefinations",
monochrome = true,dryRun = false,strict = true,
format = {
        "pretty",
        "html:test-output",
       "json:target/Pathwayreports/Cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
         "junit:junit_xml/cucumber.xml"})
public class TestRunnerclass  extends AbstractTestNGCucumberTests{
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/extentreport.xml");
        
    }
}















