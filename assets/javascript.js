
function updateTime(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

function clickHandler() {
    var data = $(this).siblings("textarea");
    var userInput = data.val();
    var id = data.attr("id");
    localStorage.setItem(id, userInput);
};

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
    });

    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))

    $(".saveBtn").click(clickHandler)

    updateTime();
    setInterval(function(){
        updateTime();
    },1000);