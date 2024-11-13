

function clock(){
    
    let time = new Date();
    let hours = time.getHours();

    let ampm = time.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours;
   
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let date = time.toDateString();

    
    document.getElementById('day').textContent = `${date}`;

    document.getElementById('clock').textContent = `${hours} : ${minutes} : ${seconds}  ${ampm}`;

}
     setInterval(clock, 1000);
     clock();