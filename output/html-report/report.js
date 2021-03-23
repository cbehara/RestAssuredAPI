$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/factory/cucumber/features/DemoFeaturePost2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Chakri"
    }
  ],
  "line": 2,
  "name": "POST: Automated Demo Tests",
  "description": "Description: POST: The purpose of this feature is to test some demo app.",
  "id": "post:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-tests;post:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "post:-automated-demo-tests;post:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 13,
      "id": "post:-automated-demo-tests;post:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "Subscription test",
        "/v1/api/sGuard/subscription",
        "application/json",
        "testdata/subscription.json",
        "POST",
        "200"
      ],
      "line": 14,
      "id": "post:-automated-demo-tests;post:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 35169900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-tests;post:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/v1/api/sGuard/subscription\" for test case \"Subscription test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"testdata/subscription.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"200\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/v1/api/sGuard/subscription",
      "offset": 22
    },
    {
      "val": "Subscription test",
      "offset": 66
    }
  ],
  "location": "StepDefinitions.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 134419400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.setHeader(String)"
});
formatter.result({
  "duration": 1112700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/subscription.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 83
    }
  ],
  "location": "StepDefinitions.submitRequest(String,String)"
});
formatter.result({
  "duration": 2887218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.verifyStatusCode(String)"
});
formatter.result({
  "duration": 2880800,
  "status": "passed"
});
});