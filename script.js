// varibales with j query applied 
let saveBtn = $(".saveBtn");
let textArea = $(".description");
let colorBlock = $(".time-block")
// time varibalbes 
let currentTime = moment().hour();
let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
// dipslayed current time in html 
$("#currentDay").html(currentDay);

// Function to be called for save
function handleSave () {
// event listener and funnction for button
    saveBtn.on("click", function () {
        // varribales to be targeted and set 
        let input = $(this).siblings("textArea").val();
        let time =  $(this).siblings(".hour").text();
    
        // set's above varibales 
    if (input === "") {
        localStorage.setItem(time, "");
    }
    else {
        localStorage.setItem(time, input);
    }
    });
}  
// functioin to be called for color in time blocks
function handleBlocks() {
// set's color for each block according to current time 
colorBlock.each(function (){
    // parses id's for color assignment 
    let presentHour = parseInt($(this).attr("id"));
    
//    conditions for color assignment according to current time 
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
//    grabs items for each block from local storage 
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
// call functions
handleSave()
handleBlocks()





