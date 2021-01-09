# Work Day Scheduler

## Purpose of application
A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## Description
A simple calendar appication that allows a user to save events for each working hour of the day.A current day will be displayed at the top of the calendar. Time blocks have been created for 9am to 5pm business hours. Each time block has textarea where user can enter schedule for that perticular hour and on click of save button it will be saved.User can edit events as well.Each time block is color-coded to indicate whether it is in the past(ight blue), present(red), or future(green). When refresh the page, the saved events persist. Page will be refreshed in every 20 mins to update color-code, which will help user to keep track of schedule.


## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Mock-Up
The following animation demonstrates the application functionality:

<div>
    <img src="./assets/images/mockup.gif" width="400px"/> 
</div>

## Built With
* HTML
* CSS
* JavaScript
* Jquery
* Bootstrap

## Website

https://anagha778.github.io/day-scheduler/