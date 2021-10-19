let H = document.getElementById('hour');
let M = document.getElementById('minute');
let S = document.getElementById('second');
let ampm = document.getElementById('ampm');

setInterval(function () {
    const dat = new Date();

    H.innerHTML = dat.getHours();
    M.innerHTML = dat.getMinutes();
    S.innerHTML = dat.getSeconds();

    if (hour < 12 && hour >= 0) {
        ampm.innerHTML = "AM";
    } else {
        ampm.innerHTML = "PM"
    }
}, 1000)