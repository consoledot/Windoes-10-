(function(){
    //variable declation 
    const startBtn = document.getElementById('start-btn')
    const start = document.getElementById('start')
    const hour = document.getElementById('hour')
    const minute = document.getElementById('minute')
    const day = document.getElementById('day')
    
    //function to show start menu
    const showStart =()=>{
        start.classList.toggle('start')
        start.classList.toggle('show')
        startBtn.classList.toggle('start-show')
    }
    //event listeners for both key and mouse to show start menu
    window.addEventListener('keydown', e=>{
        e.keyCode == 91? showStart():''
    })
    startBtn.addEventListener('click', showStart)


    //changes time every 1 second
   setInterval(()=>{
    const getCurrentTime = new Date()
   hour.textContent = getCurrentTime.getHours() -12
   minute.textContent =  getCurrentTime.getMinutes().toPrecision(2)
   day.textContent = getCurrentTime.getHours() > 12?'PM':'AM'
   }, 1000)
   
})()