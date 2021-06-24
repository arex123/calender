var d = new Date();

function renderM(){

d.setDate(1);

var start_pos = d.getDay();
var end_date = new Date(
    d.getFullYear(),
    d.getMonth()+1,
    0
).getDate();

var prev_date = new Date(
    d.getFullYear(),
    d.getMonth(),
    0
).getDate();

var months= [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]

document.getElementById("month").innerHTML= months[d.getMonth()] ;
document.getElementById("full_date").innerHTML=  d.getFullYear() ;

var cells="";

for(var i=start_pos ;i>0;i--)
{
    cells+="<div class='prev_date' >"+ (prev_date-i+1) +"</div>"
}
var today = new Date();
for(var i=1;i<=end_date;i++)
{
    if(i == today.getDate() && d.getMonth() == today.getMonth())
    {
        cells+="<div class='today'>"+i+"</div>";
    }
    else{
        cells+="<div>"+i+"</div>";
    }
}

var new_date = new Date(d);
new_date.setDate(end_date);
let end_day = new_date.getDay();
end_day = 7- end_day-1;
if(end_day<7)
{
    for(var i=1;i<=end_day;i++)
    {
        cells+="<div class='next_date'>"+i+"</div>";
    }
}
document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveData(para)
{
   if(para == 'prev' )
   {
       d.setMonth(d.getMonth() - 1);
    }
    else{
       d.setMonth(d.getMonth() + 1);
   }
   renderM();
}

// document.getElementById("demo").addEventListener("mouseover", mouseOver);
