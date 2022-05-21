let saveBtn = $(".saveBtn");
let textArea = $(".description");
let colorBlock = $(".time-block")
let currentTime = moment().hour();
let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');

$("#currentDay").html(currentDay);


function handleSave () {

    saveBtn.on("click", function () {
        let input = $(this).siblings("textArea").val();
        let time =  $(this).siblings(".hour").text();
    
        
    if (input === "") {
        localStorage.setItem(time, "");
    }
    else {
        localStorage.setItem(time, input);
    }
    });
}  

function handleBlocks() {

    colorBlock.each(function (){
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

});
           $("#9am textArea").val(localStorage.getItem("9AM"));
           $("#10am textArea").val(localStorage.getItem("10AM"));
           $("#11am textArea").val(localStorage.getItem("11AM"));
           $("#12pm textArea").val(localStorage.getItem("12pm"));
           $("#1pm textArea").val(localStorage.getItem("1pm"));
           $("#2pm textArea").val(localStorage.getItem("2pm"));
           $("#3pm textArea").val(localStorage.getItem("3pm"));
           $("#4pm textArea").val(localStorage.getItem("4pm"));
           $("#5pm textArea").val(localStorage.getItem("5pm"));
   
 
};

handleSave()
handleBlocks()





