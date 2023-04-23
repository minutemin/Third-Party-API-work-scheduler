
// $(document).ready(function () {
//     loadStorageData();
    
//  })

function setHourColors() {
    var now = dayjs();

    for (var i = 9; i < 18; i++) {
        // $("#hour-" + i + "textarea").removeClass("future");
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else {
            $("#hour-" + i + "textarea").removeClass("future");
        }
    }
}
setHourColors();

function loadStorageData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour11: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    }   
    $("#hour-10 .item").val(localStorage.getItem("hour-10"));
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
}) 