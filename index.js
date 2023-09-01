
    setInterval(() => {
        let hrs = (new Date().getHours() <10? "0": "") + new Date().getHours();
        let mins = (new Date().getMinutes() <10? "0": "") + new Date().getMinutes();
        let sec = (new Date().getSeconds() <10? "0": "") + new Date().getSeconds();
        document.getElementById("hrs").innerHTML = hrs;
        document.getElementById("mins").innerHTML = mins;
        document.getElementById("secs").innerHTML = sec;
    }, 1000);
