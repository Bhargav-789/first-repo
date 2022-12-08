function Displaydatetime(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let session = document.getElementById('session');
    
    if(hrs>12){
       hrs = hrs-12;
       session = "PM";
    }
    if(hrs<10){
        hrs = "0" + hrs;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    document.getElementById('day').innerHTML = dd;
    document.getElementById('month').innerHTML = mm;
    document.getElementById('year').innerHTML = yyyy;
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    
}
setInterval(Displaydatetime);


