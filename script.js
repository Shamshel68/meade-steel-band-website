//calendar.graphic
const date = new Date();
const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.calendar-days');
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    ];
    
    document.querySelector('.calendar-date h3').innerHTML = months[date.getMonth()];
    
    document.querySelector('.calendar-date p').innerHTML = new Date().toDateString();
    
    let days = "";
    
    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class="calendar-prev-date">${prevLastDay - x + 1}</div>`
    }
    
    for(let i = 1; i <= lastDay; i++){
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="calendar-today">${i}</div>`;
        }
        else {
            days +=`<div>${i}</div>`;
        }
    }
    
    for(let j = 1; j <= nextDays; j++){
        days += `<div class="calendar-next-date">${j}</div>`
        
    }
    monthDays.innerHTML = days;
}
document.querySelector('.calendar-prev').addEventListener("click", () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})
document.querySelector('.calendar-next').addEventListener("click", () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})
renderCalendar();
//forms

let popupexit = document.querySelector(".popup-exit-button");

function openForm(){
  document.querySelector('.fullscreen-container').style.display='block'
}
function openBulletinForm(){
  document.querySelector('#home-form-open').style.display='none'
  document.querySelector('.home-bulletin-form-open-container').style.display='block'
}
function openCalendarForm(){
  document.querySelector('#home-form-open').style.display='none'
  document.querySelector('.home-calendar-form-open-container').style.display='block'
}

popupexit.onclick = function(){
  popup.style.display ='none'
};







