package stepDefinitions;




import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;




public class LoginStepDefinition 
{
	ChromeDriver driver;
	@Given ("^user is already login page$")
	public void user_is_already_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Seleniumhq\\eclipse-java-oxygen-3a-win32-x86_64 - BDD FrameWork\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://apsrtconline.in/oprs-web/login/show.do");
		driver.manage().window().maximize();
	}

	@When ("^title of login page is APSRTC Official Website for Online Bus Ticket Booking - APSRTConline.in$")
	public void title_of_login_page_is_APSRTC_Official_Website_for_Online_Bus_Ticket_Booking_APSRTConline_in() 
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("APSRTC Official Website for Online Bus Ticket Booking - APSRTConline.in", title);

	}

	@Then ("^user enters username and password$")
	public void user_enters_username_and_password()
	{
		driver.findElement(By.name("userName")).sendKeys("jakkulababu");
		driver.findElement(By.name("password")).sendKeys("babu1234");
	}

	@Then ("^user clicks on login page$")
	public void user_clicks_on_login_page() 
	{
		driver.findElement(By.name("submitBtn")).click();
		
	}

	@And("^user is on home page$")
	public void user_is_on_home_page()
	{
		String e=driver.findElement(By.xpath("//*[contains(text(),'Booking History & Cancellation')]")).getText();
		System.out.println("Screen name"+e);
		Assert.assertEquals("Booking History & Cancellation", e);
	
		
	}
	@Then ("^user clicks on close window$")
	public void Then_user_clicks_on_close_window() 
	{
		driver.close();
	}

}
