//user input
const timeLeft = document.getElementById("time-left")

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24


//countdown timer function (referenced https://www.youtube.com/watch?v=V-Mcul5kS_Y)
function countDown() {

    //convert input to type date
    let date_string = formData.elements.namedItem("date").value;
    let time_string = formData.elements.namedItem("time").value;

    const date_arr = date_string.split("-")
    const year_input = date_arr[0]
    const month_input = date_arr[1]
    const day_input = date_arr[2]

    const time_arr = time_string.split(":")
    const hour_input = time_arr[0]
    const minute_input = time_arr[1]

    //convert strings to type date
    const today = new Date()
    const eventDate = new Date(year_input, month_input-1, day_input, hour_input, minute_input)
    const timeSpan = eventDate - today
      
    //calculate starting countdown
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor(timeSpan % day / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    //print starting countdown
    timeLeft.innerHTML = days + " : " + hours + " : " + minutes +  " : " + seconds

    //change event title to final message with icons
    if (days==0, hours==0, minutes==0, seconds==0) {
        title.innerHTML = message;

        var prevImage = document.getElementById("image");
        if(prevImage != null) {
            prevImage.parentNode.removeChild(prevImage);
        }
    
        //add icons 
        var img = document.createElement('img'); 
        img.style.width = '40px';
        img.style.height = '40px';
        img.id = "image";

        if(icon == "disco ball"){
            img.src = "images/icons/discoball.png"
            document.getElementById('title').append("          ",img);
        } 
        else if(icon == "star"){
            img.src = "images/icons/star.png"
            document.getElementById('title').append("          ",img);
        }   
        else if(icon == "party popper"){
            img.src = "images/icons/partypopper.png"
            document.getElementById('title').append("          ",img);
        }   
        else if(icon == "happy emoji"){
            img.src = "images/icons/happyemoji.png"
            document.getElementById('title').append("          ",img);
        }  
    }
}

//display countdown timer on submit
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", event => {
    formData = document.getElementById("formData");
    event = formData.elements.namedItem("event").value;
    backcolor = formData.elements.namedItem("backcolor").value;
    textcolor = formData.elements.namedItem("textcolor").value;
    message = formData.elements.namedItem("message").value;
    icon = formData.querySelector("#icons").value;

    document.getElementById("timer").style.backgroundColor = backcolor;
    document.getElementById("time-left").style.color = textcolor;
    document.getElementById("title").style.color = textcolor;

    //icontxt = icon;

    //display event title on submit
    title.innerHTML = event; 

    //countdown timer starts on submit
    let timerId;
    timerId = setInterval(countDown, second);

    var prevImage = document.getElementById("image");
        if(prevImage != null) {
            prevImage.parentNode.removeChild(prevImage);
        }
    
        
});





