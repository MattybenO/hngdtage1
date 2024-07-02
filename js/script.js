window.addEventListener('load', function(){

    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    
    function formatTime(date){
        const hours12 = date.getHours() % 12 || 12;
        const minutes = date.getMinutes();
        const isAm = date.getHours() < 12;
    
    
    
        return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, 0)} ${isAm ? "AM" : "PM"}`;
    
    
    }
    
    
    function formatDate(date) {
    
        const DAYS = ["SUNDAY", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
        const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec",];
        
    
        return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    }
    
    
    
        const now = new Date();
        timeElement.textContent = formatTime(now);
        dateElement.textContent = formatDate(now);
    
});

