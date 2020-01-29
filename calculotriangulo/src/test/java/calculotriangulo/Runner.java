package calculotriangulo;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false,
		monochrome = true,
		features = { "src/test/resources/" },
		glue = { "calculotriangulo/" },
		plugin = { "pretty",
				   "html:target/relatorio.html",
				   "json:target/relatorio.json",
				   "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/relatorio.html"
		}
)


public class Runner {

}
