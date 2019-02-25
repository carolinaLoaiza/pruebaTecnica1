$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GFontsSpace.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: carolina1605@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Feature GFontsSpace",
  "description": "",
  "id": "feature-gfontsspace",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "ChooseFont",
  "description": "",
  "id": "feature-gfontsspace;choosefont",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Open Driver",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Choose Properties \"Archivo\",\"700italic\",\"35\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Verify Properties \"Archivo\",\"700italic\",\"35\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_Driver()"
});
formatter.result({
  "duration": 6192608217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Archivo",
      "offset": 19
    },
    {
      "val": "700italic",
      "offset": 29
    },
    {
      "val": "35",
      "offset": 41
    }
  ],
  "location": "Steps.choose_Properties(String,String,String)"
});
formatter.result({
  "duration": 1170198308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Archivo",
      "offset": 19
    },
    {
      "val": "700italic",
      "offset": 29
    },
    {
      "val": "35",
      "offset": 41
    }
  ],
  "location": "Steps.verify_Properties(String,String,String)"
});
formatter.result({
  "duration": 56673765,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Driver()"
});
formatter.result({
  "duration": 5571712731,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "HideControl",
  "description": "",
  "id": "feature-gfontsspace;hidecontrol",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Open Driver",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Hiding",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Verify Result \"Show Control\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Showing",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Verify Result \"Hide Control\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_Driver()"
});
formatter.result({
  "duration": 4712527059,
  "status": "passed"
});
formatter.match({
  "location": "Steps.hiding()"
});
formatter.result({
  "duration": 320219836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show Control",
      "offset": 15
    }
  ],
  "location": "Steps.verify_Result(String)"
});
formatter.result({
  "duration": 29907618,
  "status": "passed"
});
formatter.match({
  "location": "Steps.showing()"
});
formatter.result({
  "duration": 248437463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hide Control",
      "offset": 15
    }
  ],
  "location": "Steps.verify_Result(String)"
});
formatter.result({
  "duration": 28033455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Driver()"
});
formatter.result({
  "duration": 5700849069,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "GoogleFont",
  "description": "",
  "id": "feature-gfontsspace;googlefont",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Open Driver",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Choose Properties \"Archivo\",\"700italic\",\"35\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "HowToUse",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Open Page \"Archivo\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Close Driver",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.open_Driver()"
});
formatter.result({
  "duration": 7255790246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Archivo",
      "offset": 19
    },
    {
      "val": "700italic",
      "offset": 29
    },
    {
      "val": "35",
      "offset": 41
    }
  ],
  "location": "Steps.choose_Properties(String,String,String)"
});
formatter.result({
  "duration": 1066593957,
  "status": "passed"
});
formatter.match({
  "location": "Steps.howtouse()"
});
formatter.result({
  "duration": 310023191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Archivo",
      "offset": 18
    }
  ],
  "location": "Steps.verify_Open_Page(String)"
});
formatter.result({
  "duration": 31353350,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_Driver()"
});
formatter.result({
  "duration": 6420819533,
  "status": "passed"
});
});