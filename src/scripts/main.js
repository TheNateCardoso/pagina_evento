AOS.init();

const eventDay=new Date("Dec 12, 2025 19:00:00");
const eventTimeStamp=eventDay.getTime();

const Countdown=setInterval(function(){
    const now=new Date();
    const currentTimeStamp=now.getTime();

    const daysInMs=1000*60*60*24;
    const hoursInMs=1000*60*60;
    const minutesInMs=1000*60;

    const CountdownTilTheDay=eventTimeStamp-currentTimeStamp;
    const daysTilTheDay=Math.floor(CountdownTilTheDay/daysInMs);
    const hoursTilTheDay=Math.floor((CountdownTilTheDay%daysInMs)/hoursInMs);
    const minutesTilTheDay=Math.floor((CountdownTilTheDay%hoursInMs)/minutesInMs);
    const secondsTilTheDay=Math.floor((CountdownTilTheDay%minutesInMs)/1000);

    document.getElementById('contador').innerHTML=`${daysTilTheDay}d ${hoursTilTheDay}h ${minutesTilTheDay}min ${secondsTilTheDay}s`;

    if (CountdownTilTheDay<0) {
        clearInterval(Countdown);
        document.getElementById('contador').innerHTML=`Ah, você moscou!`;
    }
},1000)