let clubName = "Read Between The Lines Book Club";
console.log("Welcome to " + clubName);

function sayHi() {
    console.log("Hi! Thanks for visiting.");
}

sayHi();

let meetingDay = "We meet the 2nd Thursday every month.";
console.log("Meetup Days: " + meetingDay);

function sayBye() {
    console.log("Goodbye");
}

sayBye();
sayBye();

// Day 2 - Getting HTML elements
let nextBtn = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting")

function showNextMeeting() {
    showNextMeeting.textContent = "Our next meeting is Sunday, November 8 at 3 PM.";
}
nextBtn.addEventListener("click", showNextMeeting)