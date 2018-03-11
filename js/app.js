const countdown = document.querySelector('.countdown');
const launchDate = new Date('Jan 1, 2019 00:000:00').getTime();
var now = new Date().getTime();
if (launchDate > now ){
    const intvl = setInterval( ()  => {
        const now = new Date().getTime();
        const timeout =  launchDate - now;
        const days = Math.floor(timeout / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeout % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        const min = Math.floor((timeout % (1000 * 60 * 60))/(1000 * 60));
        const sec = Math.floor((timeout % (1000 * 60))/1000 );
        console.log(now);
        countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${min}<span>Minutes</span></div>
        <div>${sec}<span>Seconds</span></div>
        `;
    
    }, 1000);    
} else {
    countdown.style.color = '#CCC';
    countdown.innerHTML = 'Launched!'
}
