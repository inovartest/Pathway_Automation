package com.Pathway.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features={"E:\\WORKSPACE\\Pathway\\src\\test\\java\\com\\Pathway\\Base\\Featurefiles\\Renewalflow.feature"},glue= "com.Pathway.Stepdefinations",
monochrome = true,dryRun = false,strict = true,
format = {
        "pretty",
        "html:test-output",
       "json:target/Pathwayreports/Cucumber.json",
         "junit:junit_xml/cucumber.xml"})
public class TestRunnerclass {

}


