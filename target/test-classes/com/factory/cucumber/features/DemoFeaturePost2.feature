#Author: Chakri
Feature: POST: Automated Demo Tests
  Description: POST: The purpose of this feature is to test some demo app.

  @post
  Scenario Outline: POST: Test the Demo app
    Given I want to set URL as "<URL>" for test case "<TestName>"
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples: 
      | TestName          | URL                         | ContentType      | RequestBody                | RequestMethod | StatusCode |
      | Subscription test | /v1/api/sGuard/subscription | application/json | testdata/subscription.json | POST          |        200 |

