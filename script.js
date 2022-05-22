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
           $("#9 textArea").val(localStorage.getItem("9AM"));
           $("#10 textArea").val(localStorage.getItem("10AM"));
           $("#11 textArea").val(localStorage.getItem("11AM"));
           $("#12 textArea").val(localStorage.getItem("12pm"));
           $("#13 textArea").val(localStorage.getItem("1pm"));
           $("#14 textArea").val(localStorage.getItem("2pm"));
           $("#15 textArea").val(localStorage.getItem("3pm"));
           $("#16 textArea").val(localStorage.getItem("4pm"));
           $("#17 textArea").val(localStorage.getItem("5pm"));
   
 
};

handleSave()
handleBlocks()





