package com.Alkanza.GooglePlacesAPI;

import org.testng.annotations.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;


public class getGooglePlacesApi {
	@Test
	public void test_CoffeeShop() {
		given().
		when().
		get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffeeshops+Perfecto+Bogota&key=AIzaSyCtjRyRY45JS_tUKMTqLejo8sfjusq4J74").
		then().
		assertThat().
		statusCode(200).
		and().
		body("results.name", hasSize(3));
		
	}
	
	@Test
	public void test_NotFound() {
		given().
		when().
		get("https://maps.googleapis.com/maps/ap/place/textsearch/json?query=coffeeshops+Bogota&key=AIzaSyCtjRyRY45JS_tUKMTqLejo8sfjusq4J74-").
		then().
		assertThat().
		statusCode(404);		
	}


	@Test
	public void test_Park() {
		given().
		when().
		put("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+Bogota&key=AIzaSyCtjRyRY45JS_tUKMTqLejo8sfjusq4J74").
		then().
		assertThat().
		statusCode(405);
	}
}
