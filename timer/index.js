let timerInterval;

function startTimer() {
    if(timerInterval) return; // 타이머가 작동중이면 starttimer X 

    function updateTimer() {
        let hours = parseInt(document.getElementById('hoursInput').value, 10) || 0;
        let minutes = parseInt(document.getElementById('minutesInput').value, 10) || 0;
        let seconds = parseInt(document.getElementById('secondsInput').value, 10) || 0;
        seconds--; // 초 단위 감소

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            stopTimer();
            alert("시간이 완료되었습니다!");
            return;
        }
        //시간이 계속 줄어들어 0이 되면 그만 

        document.getElementById('hoursInput').value = hours;
        document.getElementById('minutesInput').value = minutes;
        document.getElementById('secondsInput').value = seconds;
    }

    timerInterval = setInterval(updateTimer, 1000); //1초 간격 
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    document.getElementById('hoursInput').value = '';
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);