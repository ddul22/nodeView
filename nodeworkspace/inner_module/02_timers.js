// inner_module/02_timers.js
function showTime(){
  let today = new Date();
  console.log(today.toLocaleTimeString());
}
const timeout = setTimeout(()=>{
 
showTime();
}, 2000);

let count = 0;
const interval = setInterval(()=>{
  console.log('interval %d', count++);
  if(count == 2){
    clearInterval(interval);
  }
}, 1000);

console.log('End!');