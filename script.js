
let saveBtn = $(".saveBtn");
let textArea = $(".description");
let hour = $(".hour");
let colorBlock = $(".time-block")
let currentTime = moment().hour();
let currentDay = moment().format('dddd, MMM Do YYYY');

$("#currentDay").html(currentDay);


function handlePlanner () {

    saveBtn.on("click", function () {
        let input = $(this).siblings("textArea").val();
        let time = $(this).parent().attr("id");
    
        localStorage.setItem(input, time)
    });
    

    colorBlock.each(function(){
    let presentHour = parseInt($(this).attr("id"));
   

         if ( presentHour > currentTime) {
             $(this).addClass("future");
          }
          
          else if (presentHour === currentTime) {
              $(this).addClass("present");
          }
       
          else {
             $(this).addClass("past");          
           }

           $("#9am textArea").val(localStorage.getItem("9am"));
           $("#10am textArea").val(localStorage.getItem("10am"));
           $("#11am textArea").val(localStorage.getItem("11am"));
           $("#12pm textArea").val(localStorage.getItem("12pm"));
           $("#1pm textArea").val(localStorage.getItem("1pm"));
           $("#2pm textArea").val(localStorage.getItem("2pm"));
           $("#3pm textArea").val(localStorage.getItem("3pm"));
           $("#4pm textArea").val(localStorage.getItem("4pm"));
           $("#5pm textArea").val(localStorage.getItem("5pm"));
});


}


handlePlanner()





