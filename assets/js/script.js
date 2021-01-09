//Global array variale to store localstorage data
var schedule=[];


//Load all schedules from localstorage
var loadSchedule = function(){
    var getSchedule = localStorage.getItem("schedule");
    
    if (getSchedule!== null)
    {
        getSchedule = JSON.parse(getSchedule);
        for(var i=0;i<getSchedule.length;i++)
        {
            schedule[i]=getSchedule[i];
            var splitstr=schedule[i].split("-");
            $('#'+splitstr[0]).find("textarea").text(splitstr[1]);
        }
        
    }
   /* $(".row").each(function(index, el) {
        auditSchedule(el);
    });*/
};

//Set current date using momentjs
var todayDate = moment().format("dddd,  MMMM Do");
$("#currentDay").text(todayDate);

//load schedule on page load
loadSchedule();