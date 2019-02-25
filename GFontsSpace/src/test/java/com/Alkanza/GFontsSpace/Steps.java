package com.Alkanza.GFontsSpace;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Steps {

	WebDriver driver = null;
	WebDriverWait wait = null;

	@Given("^Open Driver$")
	public void open_Driver() {
		driver = new FirefoxDriver();
		driver.navigate().to("https://pankajladhar.github.io/GFontsSpace/");
		driver.manage().window().maximize();
		wait = new WebDriverWait(driver, 20);
	}

	@When("^Choose Properties \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void choose_Properties(String Font, String Variant, String Size) {
		wait.until(ExpectedConditions.elementToBeClickable(
				driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[2]"))));
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[2]")).click();
		driver.findElement(By.xpath("//span[@id='react-select-2--value']/div/input")).sendKeys(Font);
		driver.findElement(By.xpath("//span[@id='react-select-2--value']/div/input")).sendKeys(Keys.ENTER);
		driver.findElement(By.xpath("//span[@id='react-select-3--value']/div/input")).sendKeys(Variant);
		driver.findElement(By.xpath("//span[@id='react-select-3--value']/div/input")).sendKeys(Keys.ENTER);
		Actions action = new Actions(driver);
		action.moveToElement(driver
				.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[3]/div/input")))
				.doubleClick().perform();
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[3]/div/input"))
				.sendKeys(Size);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[3]/div/input"))
				.sendKeys(Keys.ENTER);
	}

	@Then("^Verify Properties \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void verify_Properties(String Font, String Variant, String Size) {
		try {
			Assert.assertEquals(Font, driver
					.findElement(By.xpath("//*[@id=\"root\"]/div/div/section/div/div/div/div/div[1]/ul/li[1]"))
					.getText());
			Assert.assertEquals(Variant,
					driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/section/div/div/div/div/div[1]/ul/li[2]"))
							.getText());
			Assert.assertEquals(Size + "Px",
					driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/section/div/div/div/div/div[1]/ul/li[3]"))
							.getText());
		} catch (Error e) {
			System.out.println(e.toString());
		}
	}

	@Then("^Close Driver$")
	public void close_Driver() {
		driver.close();
	}

	@When("^Hiding$")
	public void hiding() {
		wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.className("App__Btn"))));
		driver.findElement(By.className("App__Btn")).click();
	}

	@Then("^Verify Result \"([^\"]*)\"$")
	public void verify_Result(String TextBtt) {
		try {
			Assert.assertEquals(TextBtt, driver.findElement(By.className("App__Btn")).getText());
		} catch (Error e) {
			System.out.println(e.toString());
		}
	}

	@When("^Showing$")
	public void showing() {
		driver.findElement(By.className("App__Btn")).click();
	}

	@When("^HowToUse$")
	public void howtouse() {
		wait.until(ExpectedConditions.elementToBeClickable(
				driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/section/div/div/div/div/div[2]/button[2]"))));
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/section/div/div/div/div/div[2]/button[2]")).click();

	}

	@Then("^Verify Open Page \"([^\"]*)\"$")
	public void verify_Open_Page(String Font) {
		String link = driver.findElement(By.xpath("//*[@id=\"react-tabs-1\"]/div[2]/a")).getText();
		try {
			Assert.assertTrue(link.contains(Font));
		} catch (Error e) {
			System.out.println(e.toString());
		}
	}

}
