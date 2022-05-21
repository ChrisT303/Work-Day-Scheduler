let saveBtn = $(".saveBtn");
let textArea = $(".description");
let hour = $(".hour");
let colorBlock = $(".time-block")
let currentTime = moment().hour();


function showDay(){

     $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

showDay()


function handlePlanner () {

    saveBtn.on("click", function () {
        let input = $(this).siblings(textArea).val();
        let time = $(this).siblings(hour).text();
    
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
   
     
});


}


handlePlanner()



