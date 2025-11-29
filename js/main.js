// Generate a random motivational message
function generateMessage() {
    const messages = ["Let it Rip", "Stay Strong", "You Got This, Keep Pushing!", "Make it Count!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
}

// Function to highlight today's workout
function highlightTodayWorkout() {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = new Date().getDay();
    const todayWorkout = document.getElementById(days[today]);
    if (todayWorkout) {
        todayWorkout.style.display = "block";
    }
}

generateMessage();
highlightTodayWorkout();