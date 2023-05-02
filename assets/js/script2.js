// Display today's day and date
var todayDate = dayjs().format('dddd, MMM D YYYY - hh:mma');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".item").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = dayjs().hour();

        // loop over time blocks
       $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour-15 .item").val(localStorage.getItem("hour-15"));
    $("#hour-16 .item").val(localStorage.getItem("hour-16"));
    $("#hour-17 .item").val(localStorage.getItem("hour-17"));
    $("#hour-18 .item").val(localStorage.getItem("hour-18"));
    $("#hour-19 .item").val(localStorage.getItem("hour-19"));
    $("#hour-20 .item").val(localStorage.getItem("hour-20"));
    $("#hour-21 .item").val(localStorage.getItem("hour-21"));
    $("#hour-22 .item").val(localStorage.getItem("hour-22"));
    $("#hour-23 .item").val(localStorage.getItem("hour-23"));
    $("#hour-24 .item").val(localStorage.getItem("hour-24"));

    timeTracker();
})