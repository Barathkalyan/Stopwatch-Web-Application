let startTime, updatedTime, difference, tInterval, running = false, lapCounter = 0;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pauseStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    lapCounter = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('laps').innerHTML = "";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function lapTime() {
    if (running) {
        lapCounter++;
        let lapTime = document.createElement('li');
        lapTime.innerHTML = "Lap " + lapCounter + ": " + document.getElementById('display').innerHTML;
        document.getElementById('laps').appendChild(lapTime);
    }
}
