
// Selecting all the hands
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");


// Setting the interval to change the clock every seconds
setInterval(() => {
    let time = new Date();

    // It's very simple maths

    // 60 seconds rotates the second hand 360deg which implies 1second will rotate sec hand (360 / 60) = 6 and sa sec will rotate = (6sa).
    let sa = time.getSeconds() * 6;

    // 60 minute rotates the minute hand 360deg which implies 1minute will rotate minute hand (360 / 60) = 6 and min minute will rotate = (6min).
    let ma = time.getMinutes() * 6;

    // 12 hours rotate the hour hand 360deg which implies 1hour will rotate hour hand (360 / 12) = 30 and hr hour will rotate (30hr)
    // But since minute hand is also responsible for hour rotation as you have seen when hour hand is in between some Integer. Therefore
    // 60 min = 1 hr (from above 1 hr = 30) => angle = (30 / 60) => (1min / 2) => (ma / 12)  (since ma = 6 min)
    let ha = (time.getHours() * 30) + (ma / 12);

    hr.style.transform = `rotateZ(${ha}deg)`;
    min.style.transform = `rotateZ(${ma}deg)`;
    sec.style.transform = `rotateZ(${sa}deg)`;

}, 1000); 