var min=0;
var sec=0;
var milsec=0;
var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var milsecheading=document.getElementById("milsec");
var interval;
function timer() {
    milsec++;
    milsecheading.innerHTML= milsec;
    if(milsec>=100)
    {
        sec++
    secheading.innerHTML=sec;
    milsec=0;

    }
    else if(sec>=60)
    {
        min++
        sec=0;
        minheading.innerHTML=min
        
    }
    
    
    

}
function start(){
    interval=setInterval(timer,10)
    

}
function stop() {
    clearInterval(interval)
}
function reset() {
    min=00;
    sec=00;
    milsec=00;
    minheading.innerHTML=min
    secheading.innerHTML=sec
    milsecheading.innerHTML=milsec
    stop()
}

