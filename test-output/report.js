$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bjakkula/eclipse-workspace/WaytoSMSBDDFrameWork/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to APSRTC Feature",
  "description": "",
  "id": "login-to-apsrtc-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login To APSRTC Test Scenario",
  "description": "",
  "id": "login-to-apsrtc-feature;login-to-apsrtc-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is APSRTC Official Website for Online Bus Ticket Booking - APSRTConline.in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on close window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_login_page()"
});
formatter.result({
  "duration": 6592948385,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_APSRTC_Official_Website_for_Online_Bus_Ticket_Booking_APSRTConline_in()"
});
formatter.result({
  "duration": 10793889,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 247187876,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_page()"
});
formatter.result({
  "duration": 1162624606,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 34423244,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.Then_user_clicks_on_close_window()"
});
formatter.result({
  "duration": 113363588,
  "status": "passed"
});
});