package com.Pathway.TestRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features={"E:\\repositeryforgit\\Pathway_Automation\\Pathway\\src\\test\\java\\com\\Pathway\\Base\\Featurefiles\\Renewalflow.feature"},glue= "com.Pathway.Stepdefinations",
monochrome = true,dryRun = false,strict = true,
format = {
        "pretty",
        "html:test-output",
       "json:target/Pathwayreports/Cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
         "junit:junit_xml/cucumber.xml"})
public class TestRunnerclass {
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/extentreport.xml");
    }
}







