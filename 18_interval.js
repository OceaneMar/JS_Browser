setInterval(() => {
    let p = document.querySelector("#clock");
    const currentDate = new Date;
    const dateTime = currentDate.toLocaleString();

    p.innerHTML = dateTime;
}, 0);