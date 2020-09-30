const secondHand = document.querySelector('.secondhand');
const minutehand = document.querySelector('.minutehand');
const hourhand = document.querySelector('.hourhand');
function setDate() {
  const setdate = new Date();
  const seconds = setdate.getSeconds();
  const degreeSeconds = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${degreeSeconds}deg)`;

  const min = setdate.getMinutes();
  const degreeminutes = ((min / 60) * 360) + 90;
 minutehand.style.transform = `rotate(${degreeminutes}deg)`;

  const hour = setdate.getHours();
  const degreehours = ((hour / 12) * 360) + 90;
  hourhand.style.transform = `rotate(${degreehours}deg)`;


}
setInterval(setDate, 1000);