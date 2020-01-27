package calculotriangulo;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

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
				"C:\\Users\\rafael.souza\\eclipse-workspace\\calculotriangulo\\drivers\\Chrome\\79\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions ();
		options.addArguments("headless");
		driver = new ChromeDriver(options);
	}

	/*public static void startFirefox() {
		System.setProperty("webdriver.geckodriver.driver",
				"C:\\WorkSpaces\\calculateTriangle\\calculateTriangle\\webdriver\\Firefox\\geckodriver.exe");
		driver = new FirefoxDriver();
	}

	public static void startIE() {
		System.setProperty("webdriver.ie.driver",
				"C:\\Users\\rafael.souza\\eclipse-workspace\\calculotriangulo\\drivers\\Chrome\\79\\chromedriver.exe");
		driver = new InternetExplorerDriver();
	}
	*/
	@Given("^the user access the url \"([^\"]*)\"$")
	public void the_user_access_the_url(String arg1) throws Throwable {
		driver.get(arg1);
	}

	@And("^the user write the value in (.*),(.*),(.*)$")
	public void the_user_write_the_value_in(String arg1, String arg2, String arg3) throws Throwable {
		driver.findElement(By.id("lado1")).sendKeys(arg1 + Keys.TAB);
		driver.findElement(By.id("lado2")).sendKeys(arg2 + Keys.TAB);
		driver.findElement(By.id("lado3")).sendKeys(arg3);
	}

	@When("^the user press on \"([^\"]*)\" button$")
	public void the_user_press_on_button(String arg1) throws Throwable {
		driver.findElement(By.id("calcular")).click();
	}

	@Then("^the result is \"([^\"]*)\"$")
	public void the_result_is(String arg1) throws Throwable {
		assertEquals(arg1, driver.findElement(By.id("message")).getText());
	}

	@After
	public static void end() {
		driver.quit();

	}

}
