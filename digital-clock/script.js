function clock()
{
    var clock = [
                    [0,1,2,3,4,5],
                    [1,2],
                    [0,1,3,4,6],
                    [0,1,2,3,6],
                    [1,2,5,6],
                    [0,2,3,5,6],
                    [0,2,3,4,5,6],
                    [0,1,2,5],
                    [0,1,2,3,4,5,6],
                    [0,1,2,3,5,6]
                ];
    let hours = new Date().getHours().toString();
    hours = hours > 9 ? hours : '0' + hours;
    let minutes = new Date().getMinutes().toString();
    minutes = minutes > 9 ? minutes : '0' + minutes;
    let seconds = new Date().getSeconds().toString();
    seconds = seconds > 9 ? seconds : '0' + seconds;
    //for loop practice
    let digits = [
                    hours[0],
                    hours[1],
                    minutes[0],
                    minutes[1],
                    seconds[0],
                    seconds[1]
                 ];

    for(let i = 0; i < 6; i++)
    {       
        let currentDigit = digits[i];

        let ligths = document.querySelectorAll('.number' + i +' .light');
        // turn off lights
        for(let n = 0; n < ligths.length; n++)
        {
            ligths[n].classList.remove("on");
        }
        //loop through clock array and switch on the needed lights according to the hours,minute,second
        var onLightsIndexes = clock[currentDigit];
        for(let h = 0; h < onLightsIndexes.length; h++)
        {
            let currentOnLightIndex = onLightsIndexes[h];

            ligths[currentOnLightIndex].classList.add("on");
        }

    }
    let weekdays = document.querySelectorAll(".week-days span");
    let day = new Date().getDay();
    for(let i = 0; i < weekdays.length; i++)
    {
        weekdays[i].classList.remove("today")
        if(day == i)
        {
            weekdays[i - 1].classList.add("today");
        }
    };
}
var interval = setInterval(clock, 1000);