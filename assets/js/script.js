
/* jQuery alternative all in function:  $(document).ready(function () {
   loadStorageData();  */
    
//set current date and time on the banner
$('#currentDay').text(dayjs().format('[Today\'s Date: ]dddd, MMMM D, YYYY'));

// set colors for time in past, present and future. 
function setHourColors() {
    var now = dayjs();

    for (var i = 15; i < 24; i++) {
        //$("#hour-" + i + "textarea").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } 
        }
    }

setHourColors();
// load saved data in the local storage from calendar events to time-block if there is any
function loadStorageData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour15: "",
            hour16: "",
            hour17: "",
            hour18: "",
            hour19: "",
            hour20: "",
            hour21: "",
            hour22: "",
            hour23: "",
            hour24: "",
        }
    }   //get any info from local storage
    $("#hour-15 .item").val(localStorage.getItem("hour-15"));
    $("#hour-16 .item").val(localStorage.getItem("hour-16"));
    $("#hour-17 .item").val(localStorage.getItem("hour-17"));
    $("#hour-18 .item").val(localStorage.getItem("hour-18"));
    $("#hour-19 .item").val(localStorage.getItem("hour-19"));
    $("#hour-20 .item").val(localStorage.getItem("hour-20"));
    $("#hour-21 .item").val(localStorage.getItem("hour-21"));
    $("#hour-22 .item").val(localStorage.getItem("hour-22"));
    $("#hour-23 .item").val(localStorage.getItem("hour-23"));
  
}



function handleSaveClick(event) {
    //grab data from html
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr("id").split("-")[1];

    //localStorage.setItem("hour", hour);
    //localStorage.setItem(hour, value);
    
    //modify our data object
    eventsData["hour" + hour] = value;

    //store in local Storage
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(".saveBtn").on("click", handleSaveClick);

$(function() {
    loadStorageData();
    setHourColors();
});