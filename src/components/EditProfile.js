// constructor(){
//   super();
//   let time = this.state.product.time;
//   let timeInDate = new Date(Number(time))
//   let deadline = new Date(time);
//   let now = Date.now()
// }


// getTimeRemaining = (endtime) => {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
//   }

//   initializeClock = (id, endtime) => {
//     var clock = document.getElementsByClassName(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');
    
//     function updateClock() {
//       var t = this.getTimeRemaining(endtime);
    
//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }
//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
//   }
// if(this.time > this.now){
//   this.initializeClock('clockdiv', this.deadline);
// }
{/* <div className="clockdiv">
<h2 className="timer">
  <span className="days"></span>
  :
  <span className="hours"></span>
  :
  <span className="minutes"></span>
  :
  <span className="seconds"></span>
 </h2>
</div>   */}