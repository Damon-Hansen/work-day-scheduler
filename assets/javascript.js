// GIVEN I am using a daily planner to create a schedule
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
}

    $(".time-block").each(function() {
        var hourEl = parseInt($(this).children("textarea").attr("id"));
        var currentHour = moment().hour();
        if(hourEl<currentHour){
            $(this).addClass("past")
        }
        else if(hourEl === currentHour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    }) 




    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))




    $(".saveBtn").click(clickHandler)
 