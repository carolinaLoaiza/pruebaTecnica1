#Author: carolina1605@gmail.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Feature GFontsSpace

  Scenario: ChooseFont
    Given Open Driver
    When Choose Properties "Archivo","700italic","35"
    Then Verify Properties "Archivo","700italic","35"
    And Close Driver

  Scenario: HideControl
    Given Open Driver
    When Hiding
    Then Verify Result "Show Control"
    When Showing
    Then Verify Result "Hide Control"
    And Close Driver

  Scenario: GoogleFont
    Given Open Driver
    When Choose Properties "Archivo","700italic","35"
    When HowToUse
    Then Verify Open Page "Archivo"
    And Close Driver
