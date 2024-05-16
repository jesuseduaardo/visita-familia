 // Set the date we're counting down to
 const countDownDate = new Date("Jul 10, 2024 13:37:25").getTime();

 const subjectList = [
    "Mamá y Papá",
    "la Abuela y el Abuelo",
    "la Suegra y el Suegro"
]

let index = 0;

 // Update the count down every 1 second
 const x = setInterval(function () {

     // Get today's date and time
     const now = new Date().getTime();

     // Find the distance between now and the count down date
     const distance = countDownDate - now;

     // Time calculations for days, hours, minutes and seconds
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     // Output the result in an element with id="demo"
     const left = "<span id='days'>"+days+ " días</span>" + 
     "<span id='hours'>"+ hours + " horas</span>"+
     "<span id='minutes'>" + minutes + " minutos </span>" + 
     "<span id='seconds'>" + seconds + " segundos</span>";
     document.getElementById("left").innerHTML = left;

     if(index > (subjectList.length - 1)){
        index = 0;
     }
     document.getElementById("subject").innerHTML = subjectList[index];
     index++;
     // If the count down is over, write some text 
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("left").innerHTML = "Ya llegaron!!!";
     }
 }, 1000);