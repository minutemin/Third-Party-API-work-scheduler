
/* jQuery alternative all in function:  $(document).ready(function () {
   loadStorageData();  */

//set current date and time on the banner
$('#currentDay').text(dayjs().format('[Today\'s Date and Time: ]dddd, MMMM D, YYYY - hh:mma'));


$(document).ready(function () {
    // set colors for time in past, present and future. 
    function setHourColors() {
        var now = dayjs();

        for (var i = 15; i < 24; i++) {
            //$("#hour-" + i + "textarea").removeClass("future");
            if (i < now.hour()) {
                $("#hour-" + i + " textarea").addClass("past");
            } else if (i == now.hour()) {
                $("#hour-" + i + " textarea").addClass("present");
            } else {
                $("#hour-" + i + " textarea").addClass("future");
            }
        }
    }

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
        }
        //get any info from local storage
        console.log(localStorage.getItem("hour15"));  
        $("#hour-15 .item").val(eventsData.hour15);
        $("#hour-16 .item").val(eventsData.hour16);
        $("#hour-17 .item").val(eventsData.hour17);
        $("#hour-18 .item").val(eventsData.hour18);
        $("#hour-19 .item").val(eventsData.hour19);
        $("#hour-20 .item").val(eventsData.hour20);
        $("#hour-21 .item").val(eventsData.hour21);
        $("#hour-22 .item").val(eventsData.hour22);
        $("#hour-23 .item").val(eventsData.hour23);
    }

    // function for saving the string into local storage as a JSON strink calendar events
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
    //call function on click save button.
    $(".saveBtn").on("click", handleSaveClick);

    //calls the load storage data and hours functions
    $(function () {
        loadStorageData();
        setHourColors();
    });
});


