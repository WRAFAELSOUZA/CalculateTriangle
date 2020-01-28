package calculotriangulo;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	static WebDriver driver;

	@Before
	public void startChrome() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\engci\\git\\calculateTriangle3\\calculotriangulo\\drivers\\Chrome\\79\\chromedriver.exe");
				driver = new ChromeDriver();
	}

	/*public static void startFirefox() {
		System.setProperty("webdriver.geckodriver.driver",
				"C:\\WorkSpaces\\calculateTriangle\\calculateTriangle\\webdriver\\Firefox\\geckodriver.exe");
		driver = new FirefoxDriver();
	}

	public static void startIE() {
		System.setProperty("webdriver.ie.driver",
				"C:\\WorkSpaces\\calculateTriangle\\calculateTriangle\\webdriver\\IE\\IEDriverServer.exe");
		driver = new InternetExplorerDriver();
	}
*/
	@Given("^the user access the url \"([^\"]*)\"$")
	public void the_user_access_the_url(String url) throws Throwable {
			driver.get(url);
	}

	@And("^the user write the value in (.*),(.*),(.*)$")
	public void the_user_write_the_value_in(String side1, String side2, String side3) throws Throwable {
		driver.findElement(By.id("lado1")).sendKeys(side1);
		driver.findElement(By.id("lado2")).sendKeys(side2);
		driver.findElement(By.id("lado3")).sendKeys(side3);
		
	}

	@When("^the user press on \"([^\"]*)\" button$")
	public void the_user_press_on_button(String calcular) throws Throwable {
		driver.findElement(By.id("calcular")).click();
	}

	@Then("^the result is \"([^\"]*)\"$")
	public void the_result_is(String result) throws Throwable {
		assertEquals(result, driver.findElement(By.id("message")).getText());
	}

	@After
	public void end() {
		driver.quit();
	}
}
