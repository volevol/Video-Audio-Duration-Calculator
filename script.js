(function() {
    function calcMinutes() {
        var sum = 0;
        return function calcSeconds(time) {
            sum += (time[0] * 60 + time[1]) / 3600;
            return sum;
        };
    }

    minutes = calcMinutes();

    function enterNewTime() {
        input = prompt('Minutes<SPACE>Seconds:');
        var answer;
        if (input !== 'exit') {
            answer = minutes(input.split(' ').map(x => parseInt(x)));
            enterNewTime();
        }
    }

    function displayAnswer(ans) {
        ans = Number(ans.toFixed(1));
        console.log('It is ' + ans + ' hours or ' + 60 * ans + ' minutes.');
    }

    enterNewTime();
    displayAnswer(minutes([0, 0]));
})();
