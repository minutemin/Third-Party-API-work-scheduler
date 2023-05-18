
//set current date and time on the banner
$('#currentDay').text(dayjs().format('[Today\'s Date and Time: ]dddd, MMMM D, YYYY - hh:mma'));

$(document).ready(function () {
    // set colors for time in past, present and future. 
    function setHourColors() {
        var now = dayjs();

        for (var i = 9; i < 18; i++) {
            //$("#hour-" + i + "textarea").removeClass("future");
            console.log(i);
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
        console.log(eventsData);
                if (!eventsData) {
            eventsData = {
                hour9: "",
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
        // //get any info from local storage
        // console.log(localStorage.getItem("hour-9")); 
        // console.log($('#hour-9 .item')); 
        $("#hour-9 .item").val(eventsData.hour9);
        $("#hour-10 .item").val(eventsData.hour10);
        $("#hour-11 .item").val(eventsData.hour11);
        $("#hour-12 .item").val(eventsData.hour12);
        $("#hour-13 .item").val(eventsData.hour13);
        $("#hour-14 .item").val(eventsData.hour14);
        $("#hour-15 .item").val(eventsData.hour15);
        $("#hour-16 .item").val(eventsData.hour16);
        $("#hour-17 .item").val(eventsData.hour17);
    }

    // function for saving the string into local storage as a JSON strink calendar events
    function handleSaveClick(event) {
        //grab data from html
        console.log(event.target);
        var hourBlock = $(event.target).parent();
        if ($(event.target).hasClass("fas")) {
            hourBlock = hourBlock.parent();
        }
        console.log(hourBlock);
        var value = hourBlock.children("textarea").val();
        console.log(value);
         var hour = hourBlock.attr("id").split("-")[1];
      
        console.log(hour);

        //localStorage.setItem("hour", hour);
        //localStorage.setItem(hour, value);

        //modify our data object
       eventsData["hour" + hour] = value;

        //store in local Storage
        localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
    }

    //call function on click save button.
    $(".saveBtn").on("click", handleSaveClick);
    $(".container").on("click", handleSaveClick); 

    //calls the load storage data and hours functions
    // $(function () {
    //     loadStorageData();
    //     setHourColors();
    // });
    loadStorageData();
    setHourColors();
});


